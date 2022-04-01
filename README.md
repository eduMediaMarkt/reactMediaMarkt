# ReactMediaMarkt
Prueba web api 5.0 + Reaccionar

Este repositorio está hecho para prueba asignada.

                      Cómo funciona el proyecto:
El proyecto está realizado con SQL Server, Microsoft .Net 5 C# y React.JS con Typescript.

Se creó una base de datos llamado 'MediaMarkt', posteriormente se creó una tabla llamada 'Producto' con los campos 'Nombre', 'Descripcion', 'Precio', 'Familia_Producto'.

En la aplicación webApi con .Net 5 C#, se crearon los métodos 'GET' y 'POST' para la manipulación del modelo en la base de datos.

En la aplicación con ReactJS, se utilizaron componentes 'PrimeReact' para las pantallas. Se usó 'Hooks' de la versión 16.8. 

La aplicación React tiene dos vistas o pantalla. El primero es listar los productos y buscar uno, donde la aplicación .Net 5 (con el método 'GET'), llama a los datos en SQL Server y luego los muestra con react.js. Y el segundo (un Modal) es agregar un producto en la base de datos, donde el usuario proporciona información en un formulario, y luego, se introduce en la base de datos con la aplicación .NET 5 (con el método 'POST').

Se puede ver la información del producto al dar clic a una fila de los elementos que salen en la lista. En la parte superior puede ver el estado de los botones cuando se hace clic en ellos (Muestra cuantos clics a los botónes se han realizado). Se creó un búscador en la parte superior derecho de la lista, el cuál, realiza una búsqueda en las columnas 'Nombre' y 'Descripción' y muestra aquellos elementos que coinciden.

                  Cómo ejecutar el proyecto .Net 5:
1- Ejecute script de la base de datos brindada en Sql Server Management Studio, para crearlo.
2- Descargue o clone el proyecto a Visual Studio.
3- Ejecutar el proyecto, le mostrará a Swagger los servicios creados en webApi. 

                  Cómo ejecutar el proyecto React.js:
1- Ejecutar proyecto de .Net5.                  
2- Descargue o clone el proyecto a Visual Studio Code.
3- Instalar paquete npm.
4- Instalar paquete de componentes 'PrimeReact'.
5- Ejecutar en consola de Visual Studio Code 'npm start' para iniciar el proyecto.


#######################################################################################################################################################################

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
