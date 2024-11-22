/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/add/add.ts":
/*!***********************************!*\
  !*** ./src/components/add/add.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst store_1 = __webpack_require__(/*! ../../store */ \"./src/store/index.ts\");\nconst action_1 = __webpack_require__(/*! ../../store/action */ \"./src/store/action.ts\");\nconst store_2 = __webpack_require__(/*! ../../types/store */ \"./src/types/store.ts\");\nconst firebase_1 = __webpack_require__(/*! ../../utils/firebase */ \"./src/utils/firebase.ts\");\nconst addpr = {\n    albumname: '',\n    author: '',\n    price: '',\n    stock: '',\n    image: '',\n};\nclass Add extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    changeTitle(e) {\n        addpr.albumname = e.target.value;\n    }\n    changeAutor(e) {\n        addpr.author = e.target.value;\n    }\n    changeAlbum(e) {\n        addpr.price = e.target.value;\n    }\n    changeDuracion(e) {\n        addpr.stock = e.target.value;\n    }\n    changeImage(e) {\n        addpr.image = e.target.value;\n    }\n    submitForm() {\n        (0, firebase_1.addSong)(addpr);\n        alert('Vinilo creado');\n        (0, store_1.dispatch)((0, action_1.navigate)(store_2.Screens.HOME));\n    }\n    render() {\n        var _a, _b, _c, _d, _e, _f;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\n                <div>\n                    <input type=\"text\" id=\"albumName\" placeholder=\"Enter album name\">\n                     <input type=\"text\" id=\"artistName\" placeholder=\"Enter artist name\">\n                      <input type=\"number\" id=\"price\" placeholder=\"Enter price\" >\n                      <input type=\"number\" id=\"stock\" placeholder=\"Enter stock quantity\">\n                       <input type=\"text\" id=\"imageLink\" placeholder=\"Enter image URL\">\n                    <button id=\"submitButton\" type=\"submit\">Add Product</button>\n                </div>\n            `;\n            const buttonSubmit = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(\"#submitButton\");\n            buttonSubmit.addEventListener('click', this.submitForm);\n            const songTitle = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector(\"#albumName\");\n            songTitle.addEventListener('change', this.changeTitle);\n            const songArtist = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector(\"#artistName\");\n            songArtist.addEventListener('change', this.changeAutor);\n            const songAlbum = (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector(\"#price\");\n            songAlbum.addEventListener('change', this.changeAlbum);\n            const songDuration = (_e = this.shadowRoot) === null || _e === void 0 ? void 0 : _e.querySelector(\"#stock\");\n            songDuration.addEventListener('change', this.changeDuracion);\n            const songImage = (_f = this.shadowRoot) === null || _f === void 0 ? void 0 : _f.querySelector(\"#imageLink\");\n            songImage.addEventListener('change', this.changeImage);\n        }\n    }\n}\ncustomElements.define(\"add-commponent\", Add);\nexports[\"default\"] = Add;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/add/add.ts?");

/***/ }),

/***/ "./src/components/edit/edit.ts":
/*!*************************************!*\
  !*** ./src/components/edit/edit.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst firebase_1 = __webpack_require__(/*! ../../utils/firebase */ \"./src/utils/firebase.ts\");\nconst store_1 = __webpack_require__(/*! ../../store */ \"./src/store/index.ts\");\nconst action_1 = __webpack_require__(/*! ../../store/action */ \"./src/store/action.ts\");\nconst store_2 = __webpack_require__(/*! ../../types/store */ \"./src/types/store.ts\");\nconst editpr = {\n    albumname: '',\n    author: '',\n    price: '',\n    stock: '',\n    image: '',\n};\nclass EditP extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n        this.setInputValues();\n    }\n    setInputValues() {\n        const currentProduct = store_1.appState.currentProduct;\n        if (currentProduct && this.shadowRoot) {\n            // Asignando el nombre del álbum y el autor\n            this.shadowRoot.querySelector('#albumName').value = currentProduct.albumname;\n            this.shadowRoot.querySelector('#artistName').value = currentProduct.author;\n            // Asegurando que los valores de precio y stock sean cadenas antes de asignarlos\n            this.shadowRoot.querySelector('#price').value = currentProduct.price.toString();\n            this.shadowRoot.querySelector('#stock').value = currentProduct.stock.toString();\n            // Asignando la imagen\n            this.shadowRoot.querySelector('#imageLink').value = currentProduct.image;\n        }\n    }\n    changeTitle(e) {\n        editpr.albumname = e.target.value;\n    }\n    changeAutor(e) {\n        editpr.author = e.target.value;\n    }\n    changePrice(e) {\n        editpr.price = e.target.value;\n    }\n    changeStock(e) {\n        editpr.stock = e.target.value;\n    }\n    changeImage(e) {\n        editpr.image = e.target.value;\n    }\n    submitForm() {\n        var _a;\n        if ((_a = store_1.appState.currentProduct) === null || _a === void 0 ? void 0 : _a.id) {\n            (0, firebase_1.editSong)(store_1.appState.currentProduct.id, editpr);\n            alert('Vinilo actualizado');\n            (0, store_1.dispatch)((0, action_1.navigate)(store_2.Screens.HOME));\n        }\n        else {\n            console.error('No hay un ID válido de producto para actualizar');\n        }\n    }\n    render() {\n        var _a, _b, _c, _d, _e, _f, _g;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\n                <div>\n                    <input type=\"text\" id=\"albumName\" placeholder=\"Enter album name\">\n                     <input type=\"text\" id=\"artistName\" placeholder=\"Enter artist name\">\n                      <input type=\"number\" id=\"price\" placeholder=\"Enter price\" >\n                      <input type=\"number\" id=\"stock\" placeholder=\"Enter stock quantity\">\n                       <input type=\"text\" id=\"imageLink\" placeholder=\"Enter image URL\">\n                    <button id=\"submitButton\" type=\"submit\">Save Changes</button>\n                    <button id=\"cancel\" type=\"submit\">Cancel</button>\n                </div>\n            `;\n            const buttonSubmit = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(\"#submitButton\");\n            buttonSubmit.addEventListener('click', this.submitForm);\n            const songTitle = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector(\"#albumName\");\n            songTitle.addEventListener('change', this.changeTitle);\n            const songArtist = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector(\"#artistName\");\n            songArtist.addEventListener('change', this.changeAutor);\n            const songAlbum = (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector(\"#price\");\n            songAlbum.addEventListener('change', this.changePrice);\n            const songDuration = (_e = this.shadowRoot) === null || _e === void 0 ? void 0 : _e.querySelector(\"#stock\");\n            songDuration.addEventListener('change', this.changeStock);\n            const songImage = (_f = this.shadowRoot) === null || _f === void 0 ? void 0 : _f.querySelector(\"#imageLink\");\n            songImage.addEventListener('change', this.changeImage);\n            const cancelButton = (_g = this.shadowRoot) === null || _g === void 0 ? void 0 : _g.querySelector('#cancel');\n            cancelButton === null || cancelButton === void 0 ? void 0 : cancelButton.addEventListener('click', () => {\n                alert('Edicion cancelada');\n                (0, store_1.dispatch)((0, action_1.navigate)(store_2.Screens.MODIFICAR));\n            });\n        }\n    }\n}\ncustomElements.define(\"edit-commponent\", EditP);\nexports[\"default\"] = EditP;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/edit/edit.ts?");

/***/ }),

/***/ "./src/components/modi/modi.ts":
/*!*************************************!*\
  !*** ./src/components/modi/modi.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AttributeModi = void 0;\nconst store_1 = __webpack_require__(/*! ../../store */ \"./src/store/index.ts\");\nconst action_1 = __webpack_require__(/*! ../../store/action */ \"./src/store/action.ts\");\nconst store_2 = __webpack_require__(/*! ../../types/store */ \"./src/types/store.ts\");\nconst firebase_1 = __webpack_require__(/*! ../../utils/firebase */ \"./src/utils/firebase.ts\");\nvar AttributeModi;\n(function (AttributeModi) {\n    AttributeModi[\"image\"] = \"image\";\n    AttributeModi[\"titlesong\"] = \"titlesong\";\n    AttributeModi[\"autor\"] = \"autor\";\n    AttributeModi[\"price\"] = \"price\";\n    AttributeModi[\"stock\"] = \"stock\";\n    AttributeModi[\"idsong\"] = \"idsong\";\n})(AttributeModi || (exports.AttributeModi = AttributeModi = {}));\nclass Modi extends HTMLElement {\n    static get observedAttributes() {\n        return Object.values(AttributeModi);\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        switch (propName) {\n            case AttributeModi.price:\n                this.price = newValue ? Number(newValue) : undefined;\n                break;\n            case AttributeModi.stock:\n                this.stock = newValue ? Number(newValue) : undefined;\n                break;\n            default:\n                this[propName] = newValue;\n                break;\n        }\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\n                <div class=\"song\">\n                    <div class=\"perfil\">\n                        <div id=\"img\">\n                            <img src=\"${this.image}\" >\n                        </div>\n                        <div class=\"texts\">\n                            <p>${this.titlesong}</p>\n                            <p id=\"autor\">${this.autor}</p>\n                        </div>\n                    </div>\n                    <p class=\"album\">${this.price}</p>\n                    <p class=\"duracion\">${this.stock}</p>\n                    <button id=\"edit\">Editar</button>\n                    <button id=\"delete\">Delete</button>\n                </div>\n            `;\n            const editButton = this.shadowRoot.querySelector(\"#edit\");\n            editButton === null || editButton === void 0 ? void 0 : editButton.addEventListener('click', () => this.selectProductForEdit(this.idsong));\n            const deleteButton = this.shadowRoot.querySelector('#delete');\n            deleteButton === null || deleteButton === void 0 ? void 0 : deleteButton.addEventListener('click', () => {\n                this.deleteProduct(this.idsong);\n                alert('Vinilo borrado');\n            });\n        }\n    }\n    selectProductForEdit(productId) {\n        if (productId) {\n            const product = store_1.appState.products.find(p => p.id === productId);\n            if (product) {\n                store_1.appState.currentProduct = Object.assign({}, product);\n                (0, store_1.dispatch)((0, action_1.navigate)(store_2.Screens.EDIT));\n            }\n            else {\n                console.error('Producto no encontrado');\n            }\n        }\n    }\n    deleteProduct(productId) {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (productId) {\n                try {\n                    yield (0, firebase_1.deleteSong)(productId);\n                    const action = yield (0, action_1.getProductsAction)();\n                    (0, store_1.dispatch)(action);\n                }\n                catch (error) {\n                    console.error('Error al eliminar el producto:', error);\n                }\n            }\n            else {\n                console.error('ID del producto no proporcionado para eliminar.');\n            }\n        });\n    }\n}\ncustomElements.define(\"modi-commponent\", Modi);\nexports[\"default\"] = Modi;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/modi/modi.ts?");

/***/ }),

/***/ "./src/components/nav/nav.ts":
/*!***********************************!*\
  !*** ./src/components/nav/nav.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst index_1 = __webpack_require__(/*! ../../store/index */ \"./src/store/index.ts\");\nconst store_1 = __webpack_require__(/*! ../../types/store */ \"./src/types/store.ts\");\nconst action_1 = __webpack_require__(/*! ../../store/action */ \"./src/store/action.ts\");\nclass Nav extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b, _c;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\n              \n                    <h1>Vinyl Store</h1>\n                    <p id=\"home\">Home</p>\n                    <p id=\"add\">Add New Product</p>\n                    <p id=\"edit\">Modify Products</p>\n              \n          \n            `;\n            const edit = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('#edit');\n            edit === null || edit === void 0 ? void 0 : edit.addEventListener('click', () => {\n                (0, index_1.dispatch)((0, action_1.navigate)(store_1.Screens.MODIFICAR));\n            });\n            const home = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('#home');\n            home === null || home === void 0 ? void 0 : home.addEventListener('click', () => {\n                (0, index_1.dispatch)((0, action_1.navigate)(store_1.Screens.HOME));\n            });\n            const add = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('#add');\n            add === null || add === void 0 ? void 0 : add.addEventListener('click', () => {\n                (0, index_1.dispatch)((0, action_1.navigate)(store_1.Screens.ADD));\n            });\n        }\n    }\n}\ncustomElements.define(\"nav-commponent\", Nav);\nexports[\"default\"] = Nav;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/nav/nav.ts?");

/***/ }),

/***/ "./src/components/product/product.ts":
/*!*******************************************!*\
  !*** ./src/components/product/product.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Attribute = void 0;\nvar Attribute;\n(function (Attribute) {\n    Attribute[\"idsong\"] = \"idsong\";\n    Attribute[\"image\"] = \"image\";\n    Attribute[\"titlesong\"] = \"titlesong\";\n    Attribute[\"autor\"] = \"autor\";\n    Attribute[\"price\"] = \"price\";\n    Attribute[\"stock\"] = \"stock\";\n})(Attribute || (exports.Attribute = Attribute = {}));\nclass Song extends HTMLElement {\n    static get observedAttributes() {\n        return Object.values(Attribute);\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        switch (propName) {\n            case Attribute.idsong:\n                this.idsong = newValue ? Number(newValue) : undefined;\n                break;\n            case Attribute.price:\n                this.price = newValue ? Number(newValue) : undefined;\n                break;\n            case Attribute.stock:\n                this.stock = newValue ? Number(newValue) : undefined;\n                break;\n            default:\n                this[propName] = newValue;\n                break;\n        }\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\n                <div class=\"song\">\n                    <div class=\"perfil\">\n                        <div id=\"img\">\n                            <img src=\"${this.image}\" >\n                        </div>\n                        <div class=\"texts\">\n                            <p>${this.titlesong}</p>\n                            <p id=\"autor\">${this.autor}</p>\n                        </div>\n                    </div>\n                    <p class=\"album\">${this.price}</p>\n                    <p class=\"duracion\">${this.stock}</p>\n                </div>\n            `;\n        }\n    }\n}\ncustomElements.define(\"song-commponent\", Song);\nexports[\"default\"] = Song;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/product/product.ts?");

/***/ }),

/***/ "./src/firebaseConfig.ts":
/*!*******************************!*\
  !*** ./src/firebaseConfig.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.firebaseConfig = void 0;\nexports.firebaseConfig = {\n    apiKey: \"AIzaSyDEYtxE0kvr6MKOYngUbkT-BEqjn4OiLBw\",\n    authDomain: \"preparcial-478a6.firebaseapp.com\",\n    projectId: \"preparcial-478a6\",\n    storageBucket: \"preparcial-478a6.firebasestorage.app\",\n    messagingSenderId: \"823344232874\",\n    appId: \"1:823344232874:web:7d4be6017599926a6493d3\"\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/firebaseConfig.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ./screens/addProduct */ \"./src/screens/addProduct.ts\");\n__webpack_require__(/*! ./screens/editProduct */ \"./src/screens/editProduct.ts\");\n__webpack_require__(/*! ./screens/home */ \"./src/screens/home.ts\");\n__webpack_require__(/*! ./screens/modificar */ \"./src/screens/modificar.ts\");\nconst store_1 = __webpack_require__(/*! ./store */ \"./src/store/index.ts\");\nconst store_2 = __webpack_require__(/*! ./types/store */ \"./src/types/store.ts\");\n__webpack_require__(/*! ./components/nav/nav */ \"./src/components/nav/nav.ts\");\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n        (0, store_1.addObserver)(this);\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b, _c, _d;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = '';\n            switch (store_1.appState.screen) {\n                case store_2.Screens.ADD:\n                    const add = this.ownerDocument.createElement('app-add');\n                    (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(add);\n                    break;\n                case store_2.Screens.EDIT:\n                    const edit = this.ownerDocument.createElement('app-edit');\n                    (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(edit);\n                    break;\n                case store_2.Screens.HOME:\n                    const home = this.ownerDocument.createElement('app-home');\n                    (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.appendChild(home);\n                    break;\n                case store_2.Screens.MODIFICAR:\n                    const modi = this.ownerDocument.createElement('app-modi');\n                    (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.appendChild(modi);\n                    break;\n                default:\n                    break;\n            }\n        }\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ }),

/***/ "./src/screens/addProduct.ts":
/*!***********************************!*\
  !*** ./src/screens/addProduct.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ../components/nav/nav */ \"./src/components/nav/nav.ts\");\n__webpack_require__(/*! ../components/add/add */ \"./src/components/add/add.ts\");\nclass AddProduct extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (this.shadowRoot) {\n                this.shadowRoot.innerHTML = `\n        <nav-commponent></nav-commponent>\n        <add-commponent></add-commponent>\n        `;\n            }\n        });\n    }\n}\ncustomElements.define('app-add', AddProduct);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/addProduct.ts?");

/***/ }),

/***/ "./src/screens/editProduct.ts":
/*!************************************!*\
  !*** ./src/screens/editProduct.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ../components/nav/nav */ \"./src/components/nav/nav.ts\");\n__webpack_require__(/*! ../components/edit/edit */ \"./src/components/edit/edit.ts\");\nclass EditProduct extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (this.shadowRoot) {\n                this.shadowRoot.innerHTML = `\n                <nav-commponent></nav-commponent>\n                <edit-commponent></edit-commponent>\n                `;\n            }\n        });\n    }\n}\ncustomElements.define('app-edit', EditProduct);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/editProduct.ts?");

/***/ }),

/***/ "./src/screens/home.ts":
/*!*****************************!*\
  !*** ./src/screens/home.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ../components/nav/nav */ \"./src/components/nav/nav.ts\");\nconst product_1 = __webpack_require__(/*! ../components/product/product */ \"./src/components/product/product.ts\");\nconst action_1 = __webpack_require__(/*! ../store/action */ \"./src/store/action.ts\");\nconst store_1 = __webpack_require__(/*! ../store */ \"./src/store/index.ts\");\nconst store_2 = __webpack_require__(/*! ../store */ \"./src/store/index.ts\");\nclass Home extends HTMLElement {\n    constructor() {\n        super();\n        this.songsList = [];\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (store_2.appState.products.length === 0) {\n                const songsAction = yield (0, action_1.getProductsAction)();\n                (0, store_1.dispatch)(songsAction);\n            }\n            this.render();\n            const editProductHandler = (productId) => {\n                // Encuentra el producto que corresponde al ID\n                const productToEdit = store_2.appState.products.find(product => product.id === productId);\n                if (productToEdit) {\n                    store_2.appState.currentProduct = {\n                        id: productToEdit.id,\n                        albumname: productToEdit.albumname,\n                        author: productToEdit.author,\n                        price: productToEdit.price,\n                        stock: productToEdit.stock,\n                        image: productToEdit.image,\n                    };\n                }\n            };\n        });\n    }\n    render() {\n        return __awaiter(this, void 0, void 0, function* () {\n            var _a, _b;\n            if (this.shadowRoot) {\n                this.shadowRoot.innerHTML = `\n           \n            <nav-commponent></nav-commponent>\n             <div class=\"songs\"></div>\n            `;\n                (_a = store_2.appState.products) === null || _a === void 0 ? void 0 : _a.forEach(song => {\n                    const songItem = this.ownerDocument.createElement('song-commponent');\n                    songItem.setAttribute(product_1.Attribute.titlesong, song.albumname);\n                    songItem.setAttribute(product_1.Attribute.autor, song.author);\n                    songItem.setAttribute(product_1.Attribute.image, song.image);\n                    songItem.setAttribute(product_1.Attribute.stock, song.stock);\n                    songItem.setAttribute(product_1.Attribute.price, song.price);\n                    this.songsList.push(songItem);\n                });\n                const container = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('.songs');\n                this.songsList.forEach((song) => {\n                    container === null || container === void 0 ? void 0 : container.appendChild(song);\n                });\n            }\n            ;\n        });\n    }\n}\ncustomElements.define('app-home', Home);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/home.ts?");

/***/ }),

/***/ "./src/screens/modificar.ts":
/*!**********************************!*\
  !*** ./src/screens/modificar.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ../components/nav/nav */ \"./src/components/nav/nav.ts\");\nconst modi_1 = __webpack_require__(/*! ../components/modi/modi */ \"./src/components/modi/modi.ts\");\nconst action_1 = __webpack_require__(/*! ../store/action */ \"./src/store/action.ts\");\nconst store_1 = __webpack_require__(/*! ../store */ \"./src/store/index.ts\");\nconst store_2 = __webpack_require__(/*! ../store */ \"./src/store/index.ts\");\nclass Modificar extends HTMLElement {\n    constructor() {\n        super();\n        this.songsListModi = [];\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (store_2.appState.products.length === 0) {\n                const songsAction = yield (0, action_1.getProductsAction)();\n                (0, store_1.dispatch)(songsAction);\n            }\n            this.render();\n        });\n    }\n    render() {\n        return __awaiter(this, void 0, void 0, function* () {\n            var _a, _b;\n            if (this.shadowRoot) {\n                this.shadowRoot.innerHTML = `\n                <nav-commponent></nav-commponent>\n                 <div class=\"songs\"></div>\n                `;\n                (_a = store_2.appState.products) === null || _a === void 0 ? void 0 : _a.forEach(song => {\n                    const songItem = this.ownerDocument.createElement('modi-commponent');\n                    songItem.setAttribute(modi_1.AttributeModi.titlesong, song.albumname);\n                    songItem.setAttribute(modi_1.AttributeModi.idsong, song.id);\n                    songItem.setAttribute(modi_1.AttributeModi.autor, song.author);\n                    songItem.setAttribute(modi_1.AttributeModi.image, song.image);\n                    songItem.setAttribute(modi_1.AttributeModi.stock, song.stock);\n                    songItem.setAttribute(modi_1.AttributeModi.price, song.price);\n                    this.songsListModi.push(songItem);\n                });\n                const container = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('.songs');\n                this.songsListModi.forEach((song) => {\n                    container === null || container === void 0 ? void 0 : container.appendChild(song);\n                });\n            }\n        });\n    }\n}\ncustomElements.define('app-modi', Modificar);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/modificar.ts?");

/***/ }),

/***/ "./src/store/action.ts":
/*!*****************************!*\
  !*** ./src/store/action.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getProductsAction = exports.navigate = void 0;\nconst store_1 = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\nconst firebase_1 = __webpack_require__(/*! ../utils/firebase */ \"./src/utils/firebase.ts\");\n// import { getProducts } from '../utils/firebase';\nconst navigate = (screen) => {\n    return {\n        action: store_1.Actions.NAVIGATE,\n        payload: screen,\n    };\n};\nexports.navigate = navigate;\nconst getProductsAction = () => __awaiter(void 0, void 0, void 0, function* () {\n    const products = yield (0, firebase_1.getSongs)(); //Firestore\n    return {\n        action: store_1.Actions.GETPRODUCTS,\n        payload: products,\n    };\n});\nexports.getProductsAction = getProductsAction;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/action.ts?");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.addObserver = exports.dispatch = exports.appState = void 0;\nconst reducer_1 = __webpack_require__(/*! ./reducer */ \"./src/store/reducer.ts\");\nconst store_1 = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\nconst initialState = {\n    screen: store_1.Screens.ADD,\n    products: [],\n    currentProduct: null\n};\nexports.appState = initialState;\nlet observers = [];\nconst dispatch = (action) => {\n    const clone = JSON.parse(JSON.stringify(exports.appState));\n    const newState = (0, reducer_1.reducer)(action, clone);\n    exports.appState = newState;\n    // persistStore(newState);\n    observers.forEach((o) => o.render());\n};\nexports.dispatch = dispatch;\n//Agregar los observadores para los interesados, los suscritos\nconst addObserver = (ref) => {\n    observers = [...observers, ref];\n};\nexports.addObserver = addObserver;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/index.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.reducer = void 0;\nconst store_1 = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\nconst reducer = (currentAction, currentState) => {\n    const { action, payload } = currentAction;\n    switch (action) {\n        case store_1.Actions.NAVIGATE:\n            return Object.assign(Object.assign({}, currentState), { screen: payload });\n        case store_1.Actions.GETPRODUCTS:\n            return Object.assign(Object.assign({}, currentState), { products: payload });\n        default:\n            return currentState;\n    }\n};\nexports.reducer = reducer;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/reducer.ts?");

/***/ }),

/***/ "./src/types/store.ts":
/*!****************************!*\
  !*** ./src/types/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Actions = exports.Screens = void 0;\nvar Screens;\n(function (Screens) {\n    Screens[\"ADD\"] = \"ADD\";\n    Screens[\"EDIT\"] = \"EDIT\";\n    Screens[\"HOME\"] = \"HOME\";\n    Screens[\"MODIFICAR\"] = \"MODIFICAR\";\n})(Screens || (exports.Screens = Screens = {}));\nvar Actions;\n(function (Actions) {\n    Actions[\"NAVIGATE\"] = \"NAVIGATE\";\n    Actions[\"GETPRODUCTS\"] = \"GETPRODUCTS\";\n})(Actions || (exports.Actions = Actions = {}));\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/types/store.ts?");

/***/ }),

/***/ "./src/utils/firebase.ts":
/*!*******************************!*\
  !*** ./src/utils/firebase.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.deleteSong = exports.editSong = exports.getSongs = exports.addSong = exports.getFirebaseInstance = void 0;\nconst firebaseConfig_1 = __webpack_require__(/*! ../firebaseConfig */ \"./src/firebaseConfig.ts\");\nlet db;\nlet auth;\nlet storage;\nconst getFirebaseInstance = () => __awaiter(void 0, void 0, void 0, function* () {\n    if (!db) {\n        const { getFirestore } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\"));\n        const { initializeApp } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"node_modules_firebase_app_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\"));\n        const { getAuth } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_auth_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\"));\n        const { getStorage } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_storage_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/storage */ \"./node_modules/firebase/storage/dist/esm/index.esm.js\"));\n        const app = initializeApp(firebaseConfig_1.firebaseConfig);\n        db = getFirestore(app);\n        auth = getAuth(app);\n        storage = getStorage();\n    }\n    return { db, auth, storage };\n});\nexports.getFirebaseInstance = getFirebaseInstance;\nconst addSong = (post) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const { db } = yield (0, exports.getFirebaseInstance)();\n        const { collection, addDoc } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\"));\n        const where = collection(db, 'vinyls');\n        const registerPost = {\n            albumname: post.albumname,\n            author: post.author,\n            price: post.price,\n            stock: post.stock,\n            image: post.image,\n            dateadded: new Date().toISOString(),\n        };\n        // Añadir el post y obtener la referencia del documento creado\n        const docRef = yield addDoc(where, registerPost);\n        console.log('Se añadió con éxito el post con ID:', docRef.id);\n        // Retorna el ID del documento creado\n        return docRef.id;\n    }\n    catch (error) {\n        console.error('Error al añadir el documento:', error);\n        throw error; // Lanzar el error para manejarlo en la llamada\n    }\n});\nexports.addSong = addSong;\nconst getSongs = () => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const { db } = yield (0, exports.getFirebaseInstance)();\n        const { collection, getDocs, query, orderBy } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\"));\n        const postsCollection = collection(db, 'vinyls');\n        // Ordena los documentos por 'dateadded' en orden descendente\n        const postsQuery = query(postsCollection, orderBy('dateadded', 'desc'));\n        const querySnapshot = yield getDocs(postsQuery);\n        const data = [];\n        querySnapshot.forEach((doc) => {\n            const postData = doc.data();\n            postData.id = doc.id;\n            data.push(postData);\n        });\n        return data;\n    }\n    catch (error) {\n        console.error('Error obteniendo los documentos:', error);\n        return [];\n    }\n});\nexports.getSongs = getSongs;\nconst editSong = (id, updatedFields) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const { db } = yield (0, exports.getFirebaseInstance)();\n        const { doc, updateDoc } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\"));\n        // Obtén la referencia al documento específico por ID\n        const docRef = doc(db, 'vinyls', id);\n        // Actualiza los campos especificados\n        yield updateDoc(docRef, updatedFields);\n        console.log(`El documento con ID ${id} fue actualizado con éxito.`);\n        return true; // Retorna true si se actualizó correctamente\n    }\n    catch (error) {\n        console.error('Error al actualizar el documento:', error);\n        throw error; // Lanza el error para manejarlo en la llamada\n    }\n});\nexports.editSong = editSong;\nconst deleteSong = (id) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const { db } = yield (0, exports.getFirebaseInstance)();\n        const { doc, deleteDoc } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\"));\n        // Crear referencia al documento específico\n        const docRef = doc(db, 'vinyls', id);\n        // Eliminar el documento\n        yield deleteDoc(docRef);\n        console.log(`El producto con ID ${id} ha sido eliminado correctamente.`);\n    }\n    catch (error) {\n        console.error('Error al eliminar el producto de Firebase:', error);\n        throw error; // Relanzar el error para manejarlo en otros niveles\n    }\n});\nexports.deleteSong = deleteSong;\n// export const uploadFile = async (file: File, id: string) => {\n//   const { storage } = await getFirebaseInstance();\n//   const { ref, uploadBytes } = await import('firebase/storage');\n//   // Genera un nombre único para la imagen usando un timestamp\n//   const uniqueFileName = `${id}_${Date.now()}_${file.name}`;\n//   const storageRef = ref(storage, 'imagesVynils/' + uniqueFileName);\n//   await uploadBytes(storageRef, file).then((snapshot) => {\n//       console.log('File uploaded');\n//   });\n//   // Devuelve el nombre único del archivo subido, si lo necesitas para futuras referencias\n//   return uniqueFileName; // Opcional, si necesitas el nombre para obtener la URL\n// };\n// export const getFile = async (id: string): Promise<string | null> => {\n//   const { storage } = await getFirebaseInstance();\n//   const { ref, getDownloadURL } = await import('firebase/storage');\n//   const storageRef = ref(storage, 'imagesPosts/' + id);\n//   try {\n//       const url = await getDownloadURL(storageRef);\n//       return url; // Devuelve la URL si tiene éxito\n//   } catch (error) {\n//       console.error(error);\n//       return null; // Devuelve null si ocurre un error\n//   }\n// };\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/utils/firebase.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "dca_scoffolding:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkdca_scoffolding"] = self["webpackChunkdca_scoffolding"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;