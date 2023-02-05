(self["webpackChunk"] = self["webpackChunk"] || []).push([["PasswordReset"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/forms/auth/ResetAccountForm.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/forms/auth/ResetAccountForm.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  emits: {
    submit: function submit(payload) {
      return payload;
    }
  },
  data: function data() {
    return {
      email: this.$route.query.email,
      password: '',
      password_confirmation: '',
      token: this.$route.params.token,
      disabled: false,
      resetAccountFormValidator: undefined
    };
  },
  mounted: function mounted() {
    this.resetAccountFormValidator = new JSValidator('resetAccountForm').init();
  },
  methods: {
    onSubmit: function onSubmit() {
      var _this = this;

      if (this.resetAccountFormValidator.status) {
        this.disabled = true;
        axios.post(route.name('password.update'), {
          _token: csrf_token,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
          token: this.token
        }).then(function (res) {
          _this.$emit('submit', {
            message: 'Se ha restablecido la contraseña',
            res: res
          });
        })["catch"](function (error) {
          UIkit.notification({
            message: 'Ha ocurrido un error inesperado',
            status: 'danger'
          });
        });
      } else {
        this.disabled = false;
        UIkit.notification({
          message: 'Error de validación',
          status: 'danger'
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/views/site/auth/PasswordReset.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/views/site/auth/PasswordReset.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _forms_auth_ResetAccountForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @forms/auth/ResetAccountForm */ "./resources/vue/forms/auth/ResetAccountForm.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ResetAccountForm: _forms_auth_ResetAccountForm__WEBPACK_IMPORTED_MODULE_0__.default
  },
  methods: {
    submitForm: function submitForm(payload) {
      this.$store.dispatch('initApp');
      this.$router.push({
        name: 'Site'
      });
      UIkit.notification({
        message: payload.message,
        status: 'success'
      });
    }
  }
});

/***/ }),

/***/ "./resources/vue/forms/auth/ResetAccountForm.vue":
/*!*******************************************************!*\
  !*** ./resources/vue/forms/auth/ResetAccountForm.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ResetAccountForm_vue_vue_type_template_id_b55ef410_bindings_email_data_password_data_password_confirmation_data_token_data_disabled_data_resetAccountFormValidator_data_onSubmit_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResetAccountForm.vue?vue&type=template&id=b55ef410&bindings={"email":"data","password":"data","password_confirmation":"data","token":"data","disabled":"data","resetAccountFormValidator":"data","onSubmit":"options"} */ "./resources/vue/forms/auth/ResetAccountForm.vue?vue&type=template&id=b55ef410&bindings={\"email\":\"data\",\"password\":\"data\",\"password_confirmation\":\"data\",\"token\":\"data\",\"disabled\":\"data\",\"resetAccountFormValidator\":\"data\",\"onSubmit\":\"options\"}");
/* harmony import */ var _ResetAccountForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetAccountForm.vue?vue&type=script&lang=js */ "./resources/vue/forms/auth/ResetAccountForm.vue?vue&type=script&lang=js");



_ResetAccountForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _ResetAccountForm_vue_vue_type_template_id_b55ef410_bindings_email_data_password_data_password_confirmation_data_token_data_disabled_data_resetAccountFormValidator_data_onSubmit_options___WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_ResetAccountForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/vue/forms/auth/ResetAccountForm.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ResetAccountForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/vue/views/site/auth/PasswordReset.vue":
/*!*********************************************************!*\
  !*** ./resources/vue/views/site/auth/PasswordReset.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PasswordReset_vue_vue_type_template_id_351c2983_bindings_submitForm_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PasswordReset.vue?vue&type=template&id=351c2983&bindings={"submitForm":"options"} */ "./resources/vue/views/site/auth/PasswordReset.vue?vue&type=template&id=351c2983&bindings={\"submitForm\":\"options\"}");
/* harmony import */ var _PasswordReset_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PasswordReset.vue?vue&type=script&lang=js */ "./resources/vue/views/site/auth/PasswordReset.vue?vue&type=script&lang=js");



_PasswordReset_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _PasswordReset_vue_vue_type_template_id_351c2983_bindings_submitForm_options___WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_PasswordReset_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/vue/views/site/auth/PasswordReset.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_PasswordReset_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/vue/forms/auth/ResetAccountForm.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/vue/forms/auth/ResetAccountForm.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ResetAccountForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ResetAccountForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ResetAccountForm.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/forms/auth/ResetAccountForm.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/vue/views/site/auth/PasswordReset.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/vue/views/site/auth/PasswordReset.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PasswordReset_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PasswordReset_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PasswordReset.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/views/site/auth/PasswordReset.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/vue/forms/auth/ResetAccountForm.vue?vue&type=template&id=b55ef410&bindings={\"email\":\"data\",\"password\":\"data\",\"password_confirmation\":\"data\",\"token\":\"data\",\"disabled\":\"data\",\"resetAccountFormValidator\":\"data\",\"onSubmit\":\"options\"}":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/vue/forms/auth/ResetAccountForm.vue?vue&type=template&id=b55ef410&bindings={"email":"data","password":"data","password_confirmation":"data","token":"data","disabled":"data","resetAccountFormValidator":"data","onSubmit":"options"} ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ResetAccountForm_vue_vue_type_template_id_b55ef410_bindings_email_data_password_data_password_confirmation_data_token_data_disabled_data_resetAccountFormValidator_data_onSubmit_options___WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ResetAccountForm_vue_vue_type_template_id_b55ef410_bindings_email_data_password_data_password_confirmation_data_token_data_disabled_data_resetAccountFormValidator_data_onSubmit_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ResetAccountForm.vue?vue&type=template&id=b55ef410&bindings={"email":"data","password":"data","password_confirmation":"data","token":"data","disabled":"data","resetAccountFormValidator":"data","onSubmit":"options"} */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/forms/auth/ResetAccountForm.vue?vue&type=template&id=b55ef410&bindings={\"email\":\"data\",\"password\":\"data\",\"password_confirmation\":\"data\",\"token\":\"data\",\"disabled\":\"data\",\"resetAccountFormValidator\":\"data\",\"onSubmit\":\"options\"}");


/***/ }),

/***/ "./resources/vue/views/site/auth/PasswordReset.vue?vue&type=template&id=351c2983&bindings={\"submitForm\":\"options\"}":
/*!*************************************************************************************************************************!*\
  !*** ./resources/vue/views/site/auth/PasswordReset.vue?vue&type=template&id=351c2983&bindings={"submitForm":"options"} ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PasswordReset_vue_vue_type_template_id_351c2983_bindings_submitForm_options___WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PasswordReset_vue_vue_type_template_id_351c2983_bindings_submitForm_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PasswordReset.vue?vue&type=template&id=351c2983&bindings={"submitForm":"options"} */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/views/site/auth/PasswordReset.vue?vue&type=template&id=351c2983&bindings={\"submitForm\":\"options\"}");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/forms/auth/ResetAccountForm.vue?vue&type=template&id=b55ef410&bindings={\"email\":\"data\",\"password\":\"data\",\"password_confirmation\":\"data\",\"token\":\"data\",\"disabled\":\"data\",\"resetAccountFormValidator\":\"data\",\"onSubmit\":\"options\"}":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/forms/auth/ResetAccountForm.vue?vue&type=template&id=b55ef410&bindings={"email":"data","password":"data","password_confirmation":"data","token":"data","disabled":"data","resetAccountFormValidator":"data","onSubmit":"options"} ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _hoisted_1 = { class: "uk-margin" }
const _hoisted_2 = { class: "uk-inline uk-width-1-1" }
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  class: "uk-form-icon",
  "uk-icon": "icon: mail"
}, null, -1 /* HOISTED */)
const _hoisted_4 = { class: "uk-margin" }
const _hoisted_5 = { class: "uk-inline uk-width-1-1" }
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  class: "uk-form-icon",
  "uk-icon": "icon: lock"
}, null, -1 /* HOISTED */)
const _hoisted_7 = { class: "uk-margin" }
const _hoisted_8 = { class: "uk-inline uk-width-1-1" }
const _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  class: "uk-form-icon",
  "uk-icon": "icon: lock"
}, null, -1 /* HOISTED */)
const _hoisted_10 = { class: "uk-margin" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("form", {
    id: "resetAccountForm",
    onSubmit: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => ($options.onSubmit && $options.onSubmit(...args)), ["prevent"]))
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [
        _hoisted_3,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
          class: "uk-input uk-form-large uk-border-rounded jsValidator",
          type: "email",
          name: "email",
          placeholder: "Escribe tu email",
          "data-validators": "required email",
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ($data.email = $event))
        }, null, 512 /* NEED_PATCH */), [
          [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.email]
        ])
      ])
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [
        _hoisted_6,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
          class: "uk-input uk-form-large uk-border-rounded jsValidator",
          type: "password",
          name: "password",
          placeholder: "Escribe tu contraseña",
          "data-validators": "required length",
          "data-min_length": "8",
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ($data.password = $event))
        }, null, 512 /* NEED_PATCH */), [
          [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.password]
        ])
      ])
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [
        _hoisted_9,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
          class: "uk-input uk-form-large uk-border-rounded jsValidator",
          type: "password",
          name: "password_confirmation",
          placeholder: "Confirmar contraseña",
          "data-validators": "required password_confirmation",
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ($data.password_confirmation = $event))
        }, null, 512 /* NEED_PATCH */), [
          [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.password_confirmation]
        ])
      ])
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
        class: "uk-button uk-button-primary uk-button-large uk-width-1-1",
        disabled: $data.disabled
      }, " Restablecer contraseña ", 8 /* PROPS */, ["disabled"])
    ])
  ], 32 /* HYDRATE_EVENTS */))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/views/site/auth/PasswordReset.vue?vue&type=template&id=351c2983&bindings={\"submitForm\":\"options\"}":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/views/site/auth/PasswordReset.vue?vue&type=template&id=351c2983&bindings={"submitForm":"options"} ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _hoisted_1 = {
  class: "uk-section uk-flex uk-flex-middle uk-animation-fade",
  "uk-height-viewport": "expand: true"
}
const _hoisted_2 = { class: "uk-container" }
const _hoisted_3 = {
  class: "uk-width-1-1 uk-grid-margin",
  "uk-grid": ""
}
const _hoisted_4 = { class: "uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_reset_account_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("reset-account-form")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_reset_account_form, { onSubmit: $options.submitForm }, null, 8 /* PROPS */, ["onSubmit"])
        ])
      ])
    ])
  ]))
}

/***/ })

}]);