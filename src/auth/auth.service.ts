import { Injectable } from '@nestjs/common';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { JwtService } from '@nestjs/jwt';
import { JWTPayload } from './jwt.payload';

@Injectable()
export class AuthService {

    constructor(private usuariosService:UsuariosService,private jwtService: JwtService){}

    async validateUser(login:string,Contrasenia:string){
      const usuario = await this.usuariosService.getUsuarioByLogin(login);
      if(!usuario){
          return false;
      }
      return await usuario.validarPassword(Contrasenia);
  }
    
    async generateAccessToken(login:string){
        const usuario = await this.usuariosService.getUsuarioByLogin(login);
        const payload: JWTPayload = {login:usuario.login};
        return {token:this.jwtService.sign(payload)};
    }
}
