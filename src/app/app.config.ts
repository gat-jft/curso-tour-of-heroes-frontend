import {
    HttpClientModule,
    provideHttpClient,
    withFetch,
} from "@angular/common/http";
import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideClientHydration } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { routes } from "./app-routing.module"; // constante

export const appConfig: ApplicationConfig = {
    /* PROVIDER é tudo o que vai ficar disponível na nossa aplicação como um todo.
    
    */
    providers: [
        provideRouter(routes),

        // Para que o LOADING... (Barra giratória) funcione, tenho que injetá-lo globalmente, pq ele é do HTTP_
        // provideHttpClient(withInterceptorsFromDi()),
        // {
        //     provide: HTTP_INTERCEPTORS,
        //     useClass: LoadingInterceptor,
        //     multi: true,
        // },

        provideRouter(routes),
        provideClientHydration(),
        provideHttpClient(),
        provideHttpClient(withFetch()), // prrovideHttpClient(withFetch(), withInterceptorsFromDi()),
        importProvidersFrom(HttpClientModule),
    ],
};

// export const appConfig: ApplicationConfig = {
//     providers: [
//         {
//             provide: HTTP_INTERCEPTORS,
//             useClass: LoadingInterceptor,
//             multi: true,
//         },
//         provideRouter(routes),
//         provideClientHydration(),
//         provideAnimationsAsync(),
//         //provideHttpClient(), ???????
//         provideHttpClient(withFetch()), // ???????
//     ],
// };

//     [{
//         provideRouter(routes),
//         provideClientHydration(),
//         provideAnimationsAsync(),
//         provideHttpClient(),
//         provide: HTTP_INTERCEPTORS,

//         //provideHttpClient(withFetch(), withInterceptorsFromDi()),

// },]};

// HTTP_INTERCEPTORS,
//         useClass: LoadingInterceptor,
//         multi: true,
//     }, // Criei um OBJETO. Ele vai ser um HTTP_INTERCEPTORS. Vou passar o userClass e vou usar a Classe "Interceptador chamada 'LoadingInterceptor'". // E vou passar o "multi: true": indica que eu posso ter + de 1 classe de interceptors.
// ],
// "loadingInterceptor" é um INTERCEPTADOR.
// Posso ter um vários interceptadores (por isso um ARRAY, o [])

// Todo provide (PROVEDOR) que eu colocar neste arquivo (appConfig.ts), será usado na aplicação toda.
// Por isso que o HttpClientModule não fez falta no Component principal (arquivo principal app.component.ts).

// provideHttpClient(withFetch()),
//   Adicionado na aula 24.
//   Porque estava dando o seguinte erro:
//   ERRO Erro [NullInjectorError]: R3InjectorError(Standalone[_AppComponent])[_GetSettingsService -> _GetSettingsService -> _HttpClient -> _HttpClient]: NullInjectorError: Nenhum provedor para _HttpClient!

// provideHttpClient(withInterceptors([TokenInterceptor]), withInterceptorsFromDi()),
//    Adicionado na aula 25.
//    Pq precisava de INTERCEPTOR.
//       Com o comando: // "ng g interceptor core/interceptors/loading --skip-tests" // --skip-tests é para não gerar o arquivo de testes.
