import { google } from 'googleapis';
import fs from 'node:fs';

const auth = new google.auth.GoogleAuth({
  keyFile: require('./credentials.json'),
  scopes: ['https://www.googleapis.com/auth/drive.file'],
});

const drive = google.drive({ version: 'v3', auth });

export async function crearDirectorio(nombreDirectorio: string) {
  try {
    const res = await drive.files.create({
      requestBody: {
        name: nombreDirectorio,
        mimeType: 'application/vnd.google-apps.folder',
      },
    });
    console.log('Directorio creado:', res.data);
  } catch (error) {
    console.error('Error al crear el directorio:', error);
  }
}

// Llama a la función con el nombre deseado para el directorio
//crearDirectorio('Mi Carpeta de Imágenes');


export async function subirImagen(nombreArchivo: string, rutaLocal: string, idDirectorio: string) {
    try {
      const res = await drive.files.create({
        requestBody: {
          name: nombreArchivo,
          mimeType: 'image/jpeg', // Cambia el tipo MIME según tu imagen
          parents: [idDirectorio], // ID del directorio donde deseas guardar la imagen
        },
        media: {
          mimeType: 'image/jpeg',
          body: fs.createReadStream(rutaLocal),
        },
      });
      console.log('Imagen subida:', res.data);
    } catch (error) {
      console.error('Error al subir la imagen:', error);
    }
  }
  
  // Llama a la función con el nombre, la ruta de la imagen local y la ID del directorio
  // subirImagen('foto-perfil.jpg', 'ruta-local-de-la-imagen.jpg', 'ID-del-directorio-en-Google-Drive');
  

// Llama a la función con el nombre y la ruta de tu imagen local
//subirImagen('foto-perfil.jpg', 'ruta-local-de-la-imagen.jpg');
