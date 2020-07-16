// @ts-ignore
import { Octokit } from "@octokit/rest";
// @ts-ignore
import { createPullRequest } from "octokit-plugin-create-pull-request";
/*
const MyOctokit = Octokit.plugin(createPullRequest);
console.log(MyOctokit);

const octokit = new MyOctokit({
    auth: "7aa04b89db31a2d1195f4493c643b6c47aa7a4ec",
    userAgent: 'PWA-Showcase',
    previews: ['jean-grey', 'symmetra'],
    baseUrl: 'https://api.github.com',
    log: {
        debug: () => {},
        info: () => {},
        warn: console.warn,
        error: console.error
    },
    request: {
        agent: undefined,
        fetch: undefined,
        timeout: 0
    }
});
export async function createPR(manifest: any, url: string, supportedBrowsers: any){
    return new Promise(async (resolve, reject) => {

        var appsFile = await octokit.repos.getContent({
            owner: "pwa-builder",
            repo: "pwa-showcase",
            path: "data/apps.json",
          });

          console.log(appsFile)

        var apps = await octokit.git.getBlob({
            owner: "pwa-builder",
            repo: "pwa-showcase",
            file_sha: appsFile.data.sha,
        })
    
        var appJSON = window.atob(apps.data.content);
        console.log(supportedBrowsers)
        const dataJSON = JSON.parse(appJSON)
        var appId = `${manifest.short_name.replace(" ", "_")}-${Math.random()}`;
        
        const myPWA: any = { id: appId, manifest: manifest, url: url,support: supportedBrowsers } 

        dataJSON.push(myPWA);
    
        octokit
        .createPullRequest({
            owner: "pwa-builder",
            repo: "pwa-showcase",
            title: `submission-${manifest.short_name}`,
            body: `App submission for ${manifest.short_name}`,
            base: "master", //optional: defaults to default branch 
            head: `submission-${appId}`,
            changes: {
                files: {
                    "data/apps.json": JSON.stringify(dataJSON),
                },
                commit: "Submitting App",
            },
        })
        .then((pr: any) => {console.log(pr); resolve(pr);})
        .catch((err: Error) => reject(err))
    })
}*/