import { IsEnum, IsString, IsEmail } from 'class-validator';
import { ServiceType } from 'src/enums/service-type.enum';

export class CreateUserDto {
  @IsString({ message: 'The name must be a string.' })
  name: string;

  @IsEmail({}, { message: 'The email must be a valid email address.' })
  email: string;

  @IsEnum(ServiceType, { message: 'The service type must be either company or system_proto.' })
  type: ServiceType;
}
