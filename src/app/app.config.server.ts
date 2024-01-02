import { provideHttpClient, withFetch } from "@angular/common/http";
import { ApplicationConfig, mergeApplicationConfig } from "@angular/core";
import { provideClientHydration } from "@angular/platform-browser";
import { provideServerRendering } from "@angular/platform-server";
import { appConfig } from "./app.config";

const serverConfig: ApplicationConfig = {
    providers: [
        provideServerRendering(),
        provideClientHydration(),
        provideHttpClient(withFetch()),
        //Por que a hidratação é importante?
        //  A hidratação melhora o desempenho do aplicativo evitando trabalho extra para recriar nós DOM. Em vez disso, o Angular tenta combinar elementos DOM existentes com a
        //  estrutura do aplicativo em tempo de execução e reutiliza nós DOM quando possível. Isso resulta em uma melhoria de desempenho que pode ser medida usando
        //  Principais elementos vitais da Web (CWV) estatísticas, como a redução da tinta First-contentful PCF e a maior pintura com conteúdo (LCP ), bem como Mudança de Layout
        //  Cumulativa (CLS). Melhorar esses números também afeta coisas como o desempenho de SEO.
        //  Sem a hidratação habilitada, os aplicativos Angular renderizados do lado do servidor destruirão e renderizarão novamente o DOM do aplicativo, o que pode resultar
        //  em uma cintilação visível da IU. Essa renderização pode impactar negativamente
        //  Principais elementos vitais da Web como LCP e causar uma mudança de layout. Habilitar a hidratação permite que o DOM existente seja reutilizado e previne uma oscilação.
    ],

import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
