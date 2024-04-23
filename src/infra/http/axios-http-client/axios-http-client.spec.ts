import { HttpPostParams } from "@/data/protocols/http"
import { AxiosHttpClient } from "./axios-http-client"
import axios from 'axios'
import casual from 'casual'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
const mockedAxiosResult = {
    data: casual.random_element,
    status: casual.random
}
mockedAxios.post.mockResolvedValue(mockedAxiosResult)

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

const mockPostRequest = (): HttpPostParams<any> => ({
    url: casual.url,
    body: casual.random_element
})

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const request = mockPostRequest()
    const sut = makeSut()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
    
  })

  test('Should return the correct statusCode and body', async () => {
    const sut = makeSut()
    const httpResponse = await sut.post(mockPostRequest())
    expect(httpResponse).toEqual({
        statusCode: mockedAxiosResult.status,
        body: mockedAxiosResult.data
    })
    
  })


})

