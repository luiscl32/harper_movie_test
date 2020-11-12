# Movie list

pequeña app en react native que muestra una lista de peliculas y su detalle del api del sitio
[TheMovieDB](https://www.themoviedb.org/settings/api)

# Descarga
puedes descargar el apk del proyecto en este enlace 

[Descargar](https://mega.nz/file/FBwWFa4Y#8QS84Ka70E5wdDqtBMEDCeVDDnEX_70T3P9bF7dOPYU)

# Preview

| dark theme                              | light theme                             | detail light                            | detail dark                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| ![img](https://i.imgur.com/atLgmPz.jpg) | ![img](https://i.imgur.com/9ClTNY2.jpg) | ![img](https://i.imgur.com/vPXyDUY.jpg) | ![img](https://i.imgur.com/aNdy93M.jpg) |

## Instalación

clonar el repositiorio con el comando

`git clone`

una vez clonado acceder a la carpeta y instalar los paquetes de npm

`npm install`

`react-native link`

para compilar el proyecto en cualquier SO ya sea linux, macOS , windows debes abrir dos terminales y los siguientes comandos

terminal 1:

`react-native start`

terminal 2:

`yarn android/ios ó react-native run-android/ios`

## Documentación carpeta /src

| Carpeta      | información                                                                                                               |
| ------------ | ------------------------------------------------------------------------------------------------------------------------- |
| modules      | contiene todas pantallas dividas por nombre de modulo                                                                     |
| theme        | contiene el esquema de colores utilizados para los estilos                                                                |
| shared       | contiene todos los componentes compartidos usados en varios modulos, ejemplo: cards, buttons, etc..                       |
| navigation   | contiene todas las configuraciones de react-navigation                                                                    |
| utils        | contiene funciones o helpers que pueden usarse en varios modulos ejemplo: funcion convertImage en helpers.js              |
| redux_config | contiene toda la configuracion de redux con redux-saga para el consumo de api y estado global de tema oscuro o tema claro |

## Librerias utilizadas

- [react-native-responsive-screen](https://github.com/marudy/react-native-responsive-screen#readme)
- [redux](https://es.redux.js.org/)
- [react-redux](https://es.redux.js.org/)
- [redux-saga](https://redux-saga.js.org/)
- [moment](https://momentjs.com/)
- [lodash](https://lodash.com/)
- [ramda](https://ramdajs.com/)
- [react-navigation](https://reactnavigation.org/)
- [rn-placeholder](https://github.com/mfrachet/rn-placeholder)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [react-native-svg](https://github.com/react-native-svg/react-native-svg)

## Contacto

[luiscl32@gmail.com]()
