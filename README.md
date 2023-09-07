# ESPAÑOL

# ReadMe de la Aplicación de Búsqueda de Libros

Esta es una guía rápida para entender las principales funciones de nuestra aplicación de búsqueda de libros construida con React y Redux Toolkit. Esta aplicación te permite realizar búsquedas de libros, seleccionar un libro, agregarlo a tus favoritos, iniciar sesión y cerrar sesión.

## Características Principales

### Búsqueda de Libros

La función principal de la aplicación es permitir a los usuarios buscar libros. Esto se logra a través de la barra de búsqueda en la página principal. Al ingresar el título o el autor de un libro y presionar "Buscar", la aplicación realizará una solicitud a una API externa (por ejemplo, Google Books API) para obtener resultados coincidentes. Los resultados se mostrarán en una lista para que el usuario los examine.

### Selección de Libros

Una vez que los resultados de la búsqueda estén disponibles, los usuarios pueden hacer clic en un libro específico para obtener más detalles. Esto incluye información como el título, el autor, la descripción y la portada del libro. Además, los usuarios pueden ver la opción "Agregar a Favoritos" para marcar el libro como uno de sus favoritos.

### Gestión de Favoritos

Los usuarios pueden agregar libros a su lista de favoritos haciendo clic en el botón "Agregar a Favoritos" en la página de detalles del libro. Los libros marcados como favoritos se almacenarán en el estado de la aplicación y estarán disponibles en la sección "Favoritos" de la aplicación. Los usuarios también pueden eliminar libros de su lista de favoritos si cambian de opinión.

### Inicio de Sesión

Para acceder a la funcionalidad de favoritos, los usuarios deben iniciar sesión en la aplicación. La opción "Iniciar Sesión" en la barra de navegación les permite ingresar sus credenciales. Una vez que se inicia sesión correctamente, se habilita la capacidad de agregar y administrar libros favoritos. Los detalles del usuario se almacenan de forma segura en el estado de Redux.

### Cierre de Sesión

Los usuarios también tienen la opción de cerrar sesión en cualquier momento. Esto se puede hacer haciendo clic en "Cerrar Sesión" en la barra de navegación. Al cerrar sesión, los usuarios serán redirigidos a la página de inicio y perderán acceso a la gestión de favoritos hasta que vuelvan a iniciar sesión.

## Próximas Características (Sinup)

Estamos trabajando en la implementación de la función de registro de usuarios (Sinup) para que los nuevos usuarios puedan crear cuentas en la aplicación y disfrutar de la funcionalidad completa. Esta característica se añadirá en futuras actualizaciones de la aplicación.

¡Gracias por utilizar nuestra aplicación de búsqueda de libros construida con React y Redux Toolkit! Esperamos que encuentres libros emocionantes y útiles. Si tienes alguna pregunta o comentario, no dudes en ponerse en contacto con nuestro equipo de soporte.


# INGLES

# Book Search App ReadMe

This is a quick guide to understanding the main features of our book search application built with React and Redux Toolkit. This application allows you to perform book searches, select a book, add it to your favorites, log in, and log out.

## Key Features

### Book Search

The main function of the application is to enable users to search for books. This is achieved through the search bar on the home page. By entering the title or author of a book and pressing "Search," the application will make a request to an external API (e.g., Google Books API) to retrieve matching results. The results will be displayed in a list for the user to review.

### Book Selection

Once search results are available, users can click on a specific book to get more details. This includes information such as the title, author, description, and book cover. Additionally, users can see the "Add to Favorites" option to mark the book as one of their favorites.

### Favorites Management

Users can add books to their list of favorites by clicking the "Add to Favorites" button on the book details page. Books marked as favorites will be stored in the application's state and will be available in the "Favorites" section of the application. Users can also remove books from their favorites list if they change their minds.

### Log In

To access the favorites functionality, users must log in to the application. The "Log In" option in the navigation bar allows them to enter their credentials. Once successfully logged in, the ability to add and manage favorite books is enabled. User details are securely stored in the Redux state.

### Log Out

Users also have the option to log out at any time. This can be done by clicking "Log Out" in the navigation bar. Upon logging out, users will be redirected to the home page and will lose access to favorites management until they log in again.

## Upcoming Features (Sign Up)

We are currently working on implementing the user registration (Sign Up) feature so that new users can create accounts in the application and enjoy full functionality. This feature will be added in future updates to the application.

Thank you for using our book search application built with React and Redux Toolkit! We hope you find exciting and useful books. If you have any questions or comments, please feel free to contact our support team.
