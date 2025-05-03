# 📱 login_react_native

Desenvolvendo um login com React Native utilizando Expo e TypeScript.

---

## ✅ Requisitos da atividade

- [x] Crie um projeto novo usando **Expo**, com o template `blank (TypeScript)`.
- [x] Crie uma pasta chamada `components` dentro do projeto.
- [x] Dentro da pasta `components`, crie um componente funcional chamado `Login.tsx`.
  - 💡 Você pode usar o atalho `rnf` no VSCode se tiver a extensão ES7+ instalada.
- [x] Importe o componente `Login.tsx` no componente principal (`App.tsx`) e renderize dentro da `View`.
- [x] No `Login.tsx`, crie **dois `TextInput`**, cada um com seu `useState`.
  - Nomeie os estados como `username` e `password`.
  - 💡 **Dica**: use a prop `secureTextEntry` no campo da senha para ocultar os caracteres.
  - 💡 **Dica**: consulte a [documentação oficial do TextInput](https://reactnative.dev/docs/textinput) para entender melhor.
- [ ] Certifique-se de que os campos de entrada estão armazenando corretamente os valores nos estados.
- [ ] Adicione um `Button` no `Login.tsx`, e ao ser clicado, imprima no terminal (`console.log`) os valores de `username` e `password`.
- [ ] Suba o projeto em um repositório público no **GitHub**.
- [ ] Envie o link no Moodle **e apresente em aula**. Apenas as apresentações serão avaliadas. O envio no Moodle serve como registro.

---

## ▶️ Como rodar o projeto

Siga os passos abaixo no terminal:

```bash
# 1. Crie o projeto com template em TypeScript
npx create-expo-app login_react_native --template

# 2. Acesse a pasta do projeto
cd login_react_native

# 3. Inicie o projeto no navegador

npm run web

#  Se iniciar para rodar no app do celular:

npx expo start --tunnel
```
