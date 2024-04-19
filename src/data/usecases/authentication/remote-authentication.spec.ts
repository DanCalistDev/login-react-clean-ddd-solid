
import { HttpPostClientSpy } from "../../test/mock-http-client"
import { RemoteAuthentication } from "./remote-authentication"
import casual from 'casual';

type SutTypes = {
    sut: RemoteAuthentication
    httpPostClientSpy: HttpPostClientSpy
}
const mockDomain = casual.domain;
const makeSut = (url: string = mockDomain): SutTypes => {
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)

    return {
        sut,
        httpPostClientSpy
    }
}

describe('RemoteAuthentication', () => {
    test('Should call HttpPostClient  with correct URL', async () => { 
        const url = mockDomain
       const {sut, httpPostClientSpy} = makeSut(url)
       await sut.auth()
       expect(httpPostClientSpy.url).toBe(url)
    })
})

