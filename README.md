1. ng add @angular/elements

2. ng add @angular-extensions/elements

3. npm i gulp --save gulp gulp-concat

Locally testing

docker build -f docker/Dockerfile -t micro-1 .

docker run -d --name micro-1-container -p 8085:80 -i -t micro-1

Creating secret

kubectl create secret generic firstsecret --from-literal pwd=foo

Installing Vault

 helm repo add hashicorp https://helm.releases.hashicorp.com

 helm search repo hashicorp/vault


 PS C:\Users\User\angular\microfrontends\angular-element-micro> helm repo add hashicorp https://helm.releases.hashicorp.com
"hashicorp" has been added to your repositories
PS C:\Users\User\angular\microfrontends\angular-element-micro> helm search repo hashicorp/vault
NAME                                    CHART VERSION   APP VERSION     DESCRIPTION
hashicorp/vault                         0.27.0          1.15.2          Official HashiCorp Vault Chart       
hashicorp/vault-secrets-operator        0.5.1           0.5.1           Official Vault Secrets Operator Chart
PS C:\Users\User\angular\microfrontends\angular-element-micro> 

