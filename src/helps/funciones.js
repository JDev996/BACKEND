import jwt from 'jsonwebtoken';

export function generateToken(payload){ //este parametro 'payload' verá lo que guarde dentro del token
    return new Promise((resolver, rechazar)=>{
            jwt.sign(payload, 'secret key', {expiresIn: '1h'},
            (error, token)=>{
                if(error){
                    rechazar(error);
                }else{
                    resolver(token);
                }
            }
        );
    });
} 

export function verificarToken(token){
    return new Promise((resolver, rechazar)=>{
        jwt.verify(token, 'secret key', (error, decodificado)=>{
            if(error){
                rechazar(error);
            } else{
                resolver(decodificado);
            }
        });
    });
}