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

## T???o project react
# npx create-react-app my-project
# t??n project ko vi???t hoa

## ch???y react
# npm start

## C???u tr??c th?? m???c
# node_modules: ch???a package c??i ?????t c???a project (ko push th?? m???c n??y l??n git (???? dc m???c ?????nh b??? ??i trong .gitignore))
# => khi clone ho???c down code t??? github, ch???y l???nh npm i (????? c??i l???i th?? m???c node_modules)
# n???i dung dc c??i l???i d???a theo th?? m???c package

## public
# th?? m???c ch???a file index.html v?? img

## src
# n??i ch???a c??c components c???a project

### So s??nh gi???a props v?? state

## Gi???ng nhau: 
# + ?????u l?? thu???c t??nh c?? s???n c???a class component
# + ?????u d??ng ????? l??u tr??? d??? li???u component
## Kh??c nhau:

# +++ Props:
# + L?? d??? li???u dc truy???n t??? component cha xu???ng component con 
# + Ko th??? thay ?????i trong qu?? tr??nh truy???n (ko thay ?????i ??? component nh???n props)
# + Thay ?????i khi component truy???n props (comp cha) render l???i v?? thay ?????i gi?? tr???

# +++ State:
# + Dc ?????nh ngh??a s???n trong ch??nh component ????
# + C?? th??? thay ?????i trong qu?? tr??nh th???c thi c???a component
# + Ch??? thay ?????i dc th??ng qua method setState() (m???i l???n resetState th?? component render l???i)