
import casual from 'casual'
import { AuthenticationParams } from '../usecases/authentication'
import { AccountModel } from '../models/account-model'



export const mockAuthentication = (): AuthenticationParams => ({
     email: casual.email,
     password: casual.password
})

export const mockAccountModel = (): AccountModel => ({
     accessToken: casual.uuid
})

