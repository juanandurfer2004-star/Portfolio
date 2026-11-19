# Mi Portfolio

Web estática (HTML + CSS + JS), sin dependencias ni compilación.

## Personalizarlo

1. Abre **`datos.js`** y cambia los textos: nombre, rol, sobre mí, habilidades, proyectos, experiencia y contacto.
2. (Opcional) Añade una foto tuya llamada **`foto.jpg`** en esta carpeta: sustituye automáticamente a las iniciales.
3. (Opcional) Añade tu CV como **`cv.pdf`** y pon `cv: "cv.pdf"` en `datos.js`.
4. Abre `index.html` en el navegador para ver el resultado.

Para cambiar los colores, edita `--accent` y `--accent-2` al principio de `styles.css`.

## Subirlo a GitHub Pages

1. Crea una cuenta en [github.com](https://github.com) si no la tienes.
2. Crea un repositorio nuevo **público** llamado exactamente `TU-USUARIO.github.io`.
3. Sube los archivos de esta carpeta (botón *Add file → Upload files*, arrastrarlos y *Commit*),
   o desde la terminal:

   ```powershell
   git init
   git add .
   git commit -m "Mi portfolio"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/TU-USUARIO.github.io.git
   git push -u origin main
   ```

4. En el repositorio: *Settings → Pages → Source: Deploy from a branch → main / (root)* → *Save*.
5. En un par de minutos estará en **https://TU-USUARIO.github.io** 🎉

Cada vez que cambies algo y lo subas, la web se actualiza sola.
