import { AxiosHttpClient } from "./axios-http-client"
import axios from 'axios'
import casual from 'casual'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('AxiosHttpClient', () => {
  test('Should call axios with correct URL', async () => {
    const url = casual.url
    const sut = new AxiosHttpClient()
    await sut.post({url})
    expect(mockedAxios).toHaveBeenCalledWith(url)
    
  })
})

