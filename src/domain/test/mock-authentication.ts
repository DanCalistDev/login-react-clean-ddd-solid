
import casual from 'casual'
import { AuthenticationParams } from '../usecases/authentication'



export const mockAuthentication = (): AuthenticationParams => ({
     email: casual.email,
     password: casual.password
})

