import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app-routing.module";

import { provideHttpClient, withFetch } from "@angular/common/http";
import { provideClientHydration } from "@angular/platform-browser";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(withFetch()),
        provideRouter(routes),
        provideClientHydration(),
        provideAnimationsAsync(),

        // Todo provide (PROVEDOR) que eu colocar neste arquivo (appConfig.ts), será usado na aplicação toda.
        // Por isso que o HttpClientModule não fez falta no Component principal (arquivo principal app.component.ts).

        // provideHttpClient(withFetch()),
        //   Adicionado na aula 24.
        //   Porque estava dando o seguinte erro:
        //   ERRO Erro [NullInjectorError]: R3InjectorError(Standalone[_AppComponent])[_GetSettingsService -> _GetSettingsService -> _HttpClient -> _HttpClient]: NullInjectorError: Nenhum provedor para _HttpClient!
    ],
};