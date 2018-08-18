webpackJsonp(["animations.module"],{

/***/ "../../../../../src/app/pages/animations/animations.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/animations/animations.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Animation card start -->\r\n    <app-card [title]=\"'Enjoy Animation'\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <form class=\"animation-type\">\r\n            <div class=\"row \">\r\n              <div class=\"col-lg-4 offset-lg-3 col-md-12\">\r\n                <div class=\"m-b-30\">\r\n                  <select class=\"form-control form-control-default waves-effect input input--dropdown js--animations\" (change)=\"animate(toAnimate, $event.target.value, true)\">\r\n                    <optgroup label=\"Attention Seekers\">\r\n                      <option value=\"bounce\">bounce</option>\r\n                      <option value=\"flash\">flash</option>\r\n                      <option value=\"pulse\">pulse</option>\r\n                      <option value=\"rubberBand\">rubberBand</option>\r\n                      <option value=\"shake\">shake</option>\r\n                      <option value=\"swing\">swing</option>\r\n                      <option value=\"tada\">tada</option>\r\n                      <option value=\"wobble\">wobble</option>\r\n                      <option value=\"jello\">jello</option>\r\n                    </optgroup>\r\n                    <optgroup label=\"Bouncing Entrances\">\r\n                      <option value=\"bounceIn\">bounceIn</option>\r\n                      <option value=\"bounceInDown\">bounceInDown</option>\r\n                      <option value=\"bounceInLeft\">bounceInLeft</option>\r\n                      <option value=\"bounceInRight\">bounceInRight</option>\r\n                      <option value=\"bounceInUp\">bounceInUp</option>\r\n                    </optgroup>\r\n                    <optgroup label=\"Bouncing Exits\">\r\n                      <option value=\"bounceOut\">bounceOut</option>\r\n                      <option value=\"bounceOutDown\">bounceOutDown</option>\r\n                      <option value=\"bounceOutLeft\">bounceOutLeft</option>\r\n                      <option value=\"bounceOutRight\">bounceOutRight</option>\r\n                      <option value=\"bounceOutUp\">bounceOutUp</option>\r\n                    </optgroup>\r\n                    <optgroup label=\"Fading Entrances\">\r\n                      <option value=\"fadeIn\">fadeIn</option>\r\n                      <option value=\"fadeInDown\">fadeInDown</option>\r\n                      <option value=\"fadeInDownBig\">fadeInDownBig</option>\r\n                      <option value=\"fadeInLeft\">fadeInLeft</option>\r\n                      <option value=\"fadeInLeftBig\">fadeInLeftBig</option>\r\n                      <option value=\"fadeInRight\">fadeInRight</option>\r\n                      <option value=\"fadeInRightBig\">fadeInRightBig</option>\r\n                      <option value=\"fadeInUp\">fadeInUp</option>\r\n                      <option value=\"fadeInUpBig\">fadeInUpBig</option>\r\n                    </optgroup>\r\n                    <optgroup label=\"Fading Exits\">\r\n                      <option value=\"fadeOut\">fadeOut</option>\r\n                      <option value=\"fadeOutDown\">fadeOutDown</option>\r\n                      <option value=\"fadeOutDownBig\">fadeOutDownBig</option>\r\n                      <option value=\"fadeOutLeft\">fadeOutLeft</option>\r\n                      <option value=\"fadeOutLeftBig\">fadeOutLeftBig</option>\r\n                      <option value=\"fadeOutRight\">fadeOutRight</option>\r\n                      <option value=\"fadeOutRightBig\">fadeOutRightBig</option>\r\n                      <option value=\"fadeOutUp\">fadeOutUp</option>\r\n                      <option value=\"fadeOutUpBig\">fadeOutUpBig</option>\r\n                    </optgroup>\r\n                    <optgroup label=\"Flippers\">\r\n                      <option value=\"flip\">flip</option>\r\n                      <option value=\"flipInX\">flipInX</option>\r\n                      <option value=\"flipInY\">flipInY</option>\r\n                      <option value=\"flipOutX\">flipOutX</option>\r\n                      <option value=\"flipOutY\">flipOutY</option>\r\n                    </optgroup>\r\n                    <optgroup label=\"Lightspeed\">\r\n                      <option value=\"lightSpeedIn\">lightSpeedIn</option>\r\n                      <option value=\"lightSpeedOut\">lightSpeedOut</option>\r\n                    </optgroup>\r\n                    <optgroup label=\"Rotating Entrances\">\r\n                      <option value=\"rotateIn\">rotateIn</option>\r\n                      <option value=\"rotateInDownLeft\">rotateInDownLeft</option>\r\n                      <option value=\"rotateInDownRight\">rotateInDownRight</option>\r\n                      <option value=\"rotateInUpLeft\">rotateInUpLeft</option>\r\n                      <option value=\"rotateInUpRight\">rotateInUpRight</option>\r\n                    </optgroup>\r\n                    <optgroup label=\"Rotating Exits\">\r\n                      <option value=\"rotateOut\">rotateOut</option>\r\n                      <option value=\"rotateOutDownLeft\">rotateOutDownLeft</option>\r\n                      <option value=\"rotateOutDownRight\">rotateOutDownRight</option>\r\n                      <option value=\"rotateOutUpLeft\">rotateOutUpLeft</option>\r\n                      <option value=\"rotateOutUpRight\">rotateOutUpRight</option>\r\n                    </optgroup>\r\n                    <optgroup label=\"Sliding Entrances\">\r\n                      <option value=\"slideInUp\">slideInUp</option>\r\n                      <option value=\"slideInDown\">slideInDown</option>\r\n                      <option value=\"slideInLeft\">slideInLeft</option>\r\n                      <option value=\"slideInRight\">slideInRight</option>\r\n                    </optgroup>\r\n                    <optgroup label=\"Sliding Exits\">\r\n                      <option value=\"slideOutUp\">slideOutUp</option>\r\n                      <option value=\"slideOutDown\">slideOutDown</option>\r\n                      <option value=\"slideOutLeft\">slideOutLeft</option>\r\n                      <option value=\"slideOutRight\">slideOutRight</option>\r\n                    </optgroup>\r\n                    <optgroup label=\"Zoom Entrances\">\r\n                      <option value=\"zoomIn\">zoomIn</option>\r\n                      <option value=\"zoomInDown\">zoomInDown</option>\r\n                      <option value=\"zoomInLeft\">zoomInLeft</option>\r\n                      <option value=\"zoomInRight\">zoomInRight</option>\r\n                      <option value=\"zoomInUp\">zoomInUp</option>\r\n                    </optgroup>\r\n                    <optgroup label=\"Zoom Exits\">\r\n                      <option value=\"zoomOut\">zoomOut</option>\r\n                      <option value=\"zoomOutDown\">zoomOutDown</option>\r\n                      <option value=\"zoomOutLeft\">zoomOutLeft</option>\r\n                      <option value=\"zoomOutRight\">zoomOutRight</option>\r\n                      <option value=\"zoomOutUp\">zoomOutUp</option>\r\n                    </optgroup>\r\n                    <optgroup label=\"Specials\">\r\n                      <option value=\"hinge\">hinge</option>\r\n                      <option value=\"rollIn\">rollIn</option>\r\n                      <option value=\"rollOut\">rollOut</option>\r\n                    </optgroup>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-3 col-md-12\">\r\n                <button type=\"button\" (click)=\"animate(toAnimate, '', false)\" [disabled]=\"isAnimating || !isVisible\" class=\"btn btn-primary btn-md waves-effect waves-light butt js--triggerAnimation\">Animate me!</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n          <div class=\"main-img\" #toAnimate animates animatesInitMode=\"show\" [animatesOnInit]=\"{useVisibility: false}\" >\r\n            <div class=\"text-center animation-image\">\r\n              <img class=\"d-block img-fluid img-thumbnail\" src=\"assets/images/slider/slider7.jpg\" alt=\"Third slide\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <!-- Animation card end -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/animations/animations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_css_animator__ = __webpack_require__("../../../../css-animator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_css_animator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_css_animator__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnimationsComponent = (function () {
    function AnimationsComponent(animationService) {
        this.animation = 'bounce';
        this.isVisible = true;
        this.isAnimating = false;
        this.animator = animationService.builder();
        this.animator.useVisibility = true;
    }
    AnimationsComponent.prototype.ngOnInit = function () {
    };
    AnimationsComponent.prototype.animate = function (element, animation, status) {
        var _this = this;
        if (status) {
            this.animation = animation;
        }
        this.isAnimating = true;
        this.animator
            .setType(this.animation)
            .setDuration(1500)
            .animate(element)
            .then(function () {
            _this.isAnimating = false;
        })
            .catch(function (e) {
            _this.isAnimating = false;
            console.log('css-animator: Animation aborted', e);
        });
    };
    return AnimationsComponent;
}());
AnimationsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-animations',
        template: __webpack_require__("../../../../../src/app/pages/animations/animations.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/animations/animations.component.css"), __webpack_require__("../../../../../src/assets/css/animate.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_css_animator__["AnimationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_css_animator__["AnimationService"]) === "function" && _a || Object])
], AnimationsComponent);

var _a;
//# sourceMappingURL=animations.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/animations/animations.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationsRoutes", function() { return AnimationsRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationsModule", function() { return AnimationsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_component__ = __webpack_require__("../../../../../src/app/pages/animations/animations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_css_animator__ = __webpack_require__("../../../../css-animator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_css_animator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_css_animator__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AnimationsRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__animations_component__["a" /* AnimationsComponent */],
        data: {
            heading: 'Animations',
            breadcrumb: 'Animations',
            icon: 'icofont-maximize bg-c-yellow'
        }
    }];
var AnimationsModule = (function () {
    function AnimationsModule() {
    }
    return AnimationsModule;
}());
AnimationsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(AnimationsRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5_css_animator__["AnimatorModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__animations_component__["a" /* AnimationsComponent */]]
    })
], AnimationsModule);

//# sourceMappingURL=animations.module.js.map

/***/ }),

/***/ "../../../../../src/assets/css/animate.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\r\n\r\n/*!\r\n * animate.css -http://daneden.me/animate\r\n * Version - 3.5.2\r\n * Licensed under the MIT license - http://opensource.org/licenses/MIT\r\n *\r\n * Copyright (c) 2017 Daniel Eden\r\n */\r\n\r\n.animated {\r\n  -webkit-animation-duration: 1s;\r\n          animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n          animation-fill-mode: both;\r\n}\r\n\r\n.animated.infinite {\r\n  -webkit-animation-iteration-count: infinite;\r\n          animation-iteration-count: infinite;\r\n}\r\n\r\n.animated.hinge {\r\n  -webkit-animation-duration: 2s;\r\n          animation-duration: 2s;\r\n}\r\n\r\n.animated.flipOutX,\r\n.animated.flipOutY,\r\n.animated.bounceIn,\r\n.animated.bounceOut {\r\n  -webkit-animation-duration: .75s;\r\n          animation-duration: .75s;\r\n}\r\n\r\n@-webkit-keyframes bounce {\r\n  from, 20%, 53%, 80%, to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n    -webkit-transform: translate3d(0,0,0);\r\n            transform: translate3d(0,0,0);\r\n  }\r\n\r\n  40%, 43% {\r\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\r\n            animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\r\n    -webkit-transform: translate3d(0, -30px, 0);\r\n            transform: translate3d(0, -30px, 0);\r\n  }\r\n\r\n  70% {\r\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\r\n            animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\r\n    -webkit-transform: translate3d(0, -15px, 0);\r\n            transform: translate3d(0, -15px, 0);\r\n  }\r\n\r\n  90% {\r\n    -webkit-transform: translate3d(0,-4px,0);\r\n            transform: translate3d(0,-4px,0);\r\n  }\r\n}\r\n\r\n@keyframes bounce {\r\n  from, 20%, 53%, 80%, to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n    -webkit-transform: translate3d(0,0,0);\r\n            transform: translate3d(0,0,0);\r\n  }\r\n\r\n  40%, 43% {\r\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\r\n            animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\r\n    -webkit-transform: translate3d(0, -30px, 0);\r\n            transform: translate3d(0, -30px, 0);\r\n  }\r\n\r\n  70% {\r\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\r\n            animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\r\n    -webkit-transform: translate3d(0, -15px, 0);\r\n            transform: translate3d(0, -15px, 0);\r\n  }\r\n\r\n  90% {\r\n    -webkit-transform: translate3d(0,-4px,0);\r\n            transform: translate3d(0,-4px,0);\r\n  }\r\n}\r\n\r\n.bounce {\r\n  -webkit-animation-name: bounce;\r\n          animation-name: bounce;\r\n  -webkit-transform-origin: center bottom;\r\n          transform-origin: center bottom;\r\n}\r\n\r\n@-webkit-keyframes flash {\r\n  from, 50%, to {\r\n    opacity: 1;\r\n  }\r\n\r\n  25%, 75% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes flash {\r\n  from, 50%, to {\r\n    opacity: 1;\r\n  }\r\n\r\n  25%, 75% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.flash {\r\n  -webkit-animation-name: flash;\r\n          animation-name: flash;\r\n}\r\n\r\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\r\n\r\n@-webkit-keyframes pulse {\r\n  from {\r\n    -webkit-transform: scale3d(1, 1, 1);\r\n            transform: scale3d(1, 1, 1);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\r\n            transform: scale3d(1.05, 1.05, 1.05);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: scale3d(1, 1, 1);\r\n            transform: scale3d(1, 1, 1);\r\n  }\r\n}\r\n\r\n@keyframes pulse {\r\n  from {\r\n    -webkit-transform: scale3d(1, 1, 1);\r\n            transform: scale3d(1, 1, 1);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\r\n            transform: scale3d(1.05, 1.05, 1.05);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: scale3d(1, 1, 1);\r\n            transform: scale3d(1, 1, 1);\r\n  }\r\n}\r\n\r\n.pulse {\r\n  -webkit-animation-name: pulse;\r\n          animation-name: pulse;\r\n}\r\n\r\n@-webkit-keyframes rubberBand {\r\n  from {\r\n    -webkit-transform: scale3d(1, 1, 1);\r\n            transform: scale3d(1, 1, 1);\r\n  }\r\n\r\n  30% {\r\n    -webkit-transform: scale3d(1.25, 0.75, 1);\r\n            transform: scale3d(1.25, 0.75, 1);\r\n  }\r\n\r\n  40% {\r\n    -webkit-transform: scale3d(0.75, 1.25, 1);\r\n            transform: scale3d(0.75, 1.25, 1);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: scale3d(1.15, 0.85, 1);\r\n            transform: scale3d(1.15, 0.85, 1);\r\n  }\r\n\r\n  65% {\r\n    -webkit-transform: scale3d(.95, 1.05, 1);\r\n            transform: scale3d(.95, 1.05, 1);\r\n  }\r\n\r\n  75% {\r\n    -webkit-transform: scale3d(1.05, .95, 1);\r\n            transform: scale3d(1.05, .95, 1);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: scale3d(1, 1, 1);\r\n            transform: scale3d(1, 1, 1);\r\n  }\r\n}\r\n\r\n@keyframes rubberBand {\r\n  from {\r\n    -webkit-transform: scale3d(1, 1, 1);\r\n            transform: scale3d(1, 1, 1);\r\n  }\r\n\r\n  30% {\r\n    -webkit-transform: scale3d(1.25, 0.75, 1);\r\n            transform: scale3d(1.25, 0.75, 1);\r\n  }\r\n\r\n  40% {\r\n    -webkit-transform: scale3d(0.75, 1.25, 1);\r\n            transform: scale3d(0.75, 1.25, 1);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: scale3d(1.15, 0.85, 1);\r\n            transform: scale3d(1.15, 0.85, 1);\r\n  }\r\n\r\n  65% {\r\n    -webkit-transform: scale3d(.95, 1.05, 1);\r\n            transform: scale3d(.95, 1.05, 1);\r\n  }\r\n\r\n  75% {\r\n    -webkit-transform: scale3d(1.05, .95, 1);\r\n            transform: scale3d(1.05, .95, 1);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: scale3d(1, 1, 1);\r\n            transform: scale3d(1, 1, 1);\r\n  }\r\n}\r\n\r\n.rubberBand {\r\n  -webkit-animation-name: rubberBand;\r\n          animation-name: rubberBand;\r\n}\r\n\r\n@-webkit-keyframes shake {\r\n  from, to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  10%, 30%, 50%, 70%, 90% {\r\n    -webkit-transform: translate3d(-10px, 0, 0);\r\n            transform: translate3d(-10px, 0, 0);\r\n  }\r\n\r\n  20%, 40%, 60%, 80% {\r\n    -webkit-transform: translate3d(10px, 0, 0);\r\n            transform: translate3d(10px, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes shake {\r\n  from, to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  10%, 30%, 50%, 70%, 90% {\r\n    -webkit-transform: translate3d(-10px, 0, 0);\r\n            transform: translate3d(-10px, 0, 0);\r\n  }\r\n\r\n  20%, 40%, 60%, 80% {\r\n    -webkit-transform: translate3d(10px, 0, 0);\r\n            transform: translate3d(10px, 0, 0);\r\n  }\r\n}\r\n\r\n.shake {\r\n  -webkit-animation-name: shake;\r\n          animation-name: shake;\r\n}\r\n\r\n@-webkit-keyframes headShake {\r\n  0% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n  }\r\n\r\n  6.5% {\r\n    -webkit-transform: translateX(-6px) rotateY(-9deg);\r\n            transform: translateX(-6px) rotateY(-9deg);\r\n  }\r\n\r\n  18.5% {\r\n    -webkit-transform: translateX(5px) rotateY(7deg);\r\n            transform: translateX(5px) rotateY(7deg);\r\n  }\r\n\r\n  31.5% {\r\n    -webkit-transform: translateX(-3px) rotateY(-5deg);\r\n            transform: translateX(-3px) rotateY(-5deg);\r\n  }\r\n\r\n  43.5% {\r\n    -webkit-transform: translateX(2px) rotateY(3deg);\r\n            transform: translateX(2px) rotateY(3deg);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n  }\r\n}\r\n\r\n@keyframes headShake {\r\n  0% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n  }\r\n\r\n  6.5% {\r\n    -webkit-transform: translateX(-6px) rotateY(-9deg);\r\n            transform: translateX(-6px) rotateY(-9deg);\r\n  }\r\n\r\n  18.5% {\r\n    -webkit-transform: translateX(5px) rotateY(7deg);\r\n            transform: translateX(5px) rotateY(7deg);\r\n  }\r\n\r\n  31.5% {\r\n    -webkit-transform: translateX(-3px) rotateY(-5deg);\r\n            transform: translateX(-3px) rotateY(-5deg);\r\n  }\r\n\r\n  43.5% {\r\n    -webkit-transform: translateX(2px) rotateY(3deg);\r\n            transform: translateX(2px) rotateY(3deg);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n  }\r\n}\r\n\r\n.headShake {\r\n  -webkit-animation-timing-function: ease-in-out;\r\n          animation-timing-function: ease-in-out;\r\n  -webkit-animation-name: headShake;\r\n          animation-name: headShake;\r\n}\r\n\r\n@-webkit-keyframes swing {\r\n  20% {\r\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\r\n            transform: rotate3d(0, 0, 1, 15deg);\r\n  }\r\n\r\n  40% {\r\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\r\n            transform: rotate3d(0, 0, 1, -10deg);\r\n  }\r\n\r\n  60% {\r\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\r\n            transform: rotate3d(0, 0, 1, 5deg);\r\n  }\r\n\r\n  80% {\r\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\r\n            transform: rotate3d(0, 0, 1, -5deg);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\r\n            transform: rotate3d(0, 0, 1, 0deg);\r\n  }\r\n}\r\n\r\n@keyframes swing {\r\n  20% {\r\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\r\n            transform: rotate3d(0, 0, 1, 15deg);\r\n  }\r\n\r\n  40% {\r\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\r\n            transform: rotate3d(0, 0, 1, -10deg);\r\n  }\r\n\r\n  60% {\r\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\r\n            transform: rotate3d(0, 0, 1, 5deg);\r\n  }\r\n\r\n  80% {\r\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\r\n            transform: rotate3d(0, 0, 1, -5deg);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\r\n            transform: rotate3d(0, 0, 1, 0deg);\r\n  }\r\n}\r\n\r\n.swing {\r\n  -webkit-transform-origin: top center;\r\n          transform-origin: top center;\r\n  -webkit-animation-name: swing;\r\n          animation-name: swing;\r\n}\r\n\r\n@-webkit-keyframes tada {\r\n  from {\r\n    -webkit-transform: scale3d(1, 1, 1);\r\n            transform: scale3d(1, 1, 1);\r\n  }\r\n\r\n  10%, 20% {\r\n    -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\r\n            transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\r\n  }\r\n\r\n  30%, 50%, 70%, 90% {\r\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\r\n            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\r\n  }\r\n\r\n  40%, 60%, 80% {\r\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\r\n            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: scale3d(1, 1, 1);\r\n            transform: scale3d(1, 1, 1);\r\n  }\r\n}\r\n\r\n@keyframes tada {\r\n  from {\r\n    -webkit-transform: scale3d(1, 1, 1);\r\n            transform: scale3d(1, 1, 1);\r\n  }\r\n\r\n  10%, 20% {\r\n    -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\r\n            transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\r\n  }\r\n\r\n  30%, 50%, 70%, 90% {\r\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\r\n            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\r\n  }\r\n\r\n  40%, 60%, 80% {\r\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\r\n            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: scale3d(1, 1, 1);\r\n            transform: scale3d(1, 1, 1);\r\n  }\r\n}\r\n\r\n.tada {\r\n  -webkit-animation-name: tada;\r\n          animation-name: tada;\r\n}\r\n\r\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\r\n\r\n@-webkit-keyframes wobble {\r\n  from {\r\n    -webkit-transform: none;\r\n            transform: none;\r\n  }\r\n\r\n  15% {\r\n    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\r\n            transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\r\n  }\r\n\r\n  30% {\r\n    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\r\n            transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\r\n  }\r\n\r\n  45% {\r\n    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\r\n            transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\r\n  }\r\n\r\n  60% {\r\n    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\r\n            transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\r\n  }\r\n\r\n  75% {\r\n    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\r\n            transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: none;\r\n            transform: none;\r\n  }\r\n}\r\n\r\n@keyframes wobble {\r\n  from {\r\n    -webkit-transform: none;\r\n            transform: none;\r\n  }\r\n\r\n  15% {\r\n    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\r\n            transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\r\n  }\r\n\r\n  30% {\r\n    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\r\n            transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\r\n  }\r\n\r\n  45% {\r\n    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\r\n            transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\r\n  }\r\n\r\n  60% {\r\n    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\r\n            transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\r\n  }\r\n\r\n  75% {\r\n    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\r\n            transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: none;\r\n            transform: none;\r\n  }\r\n}\r\n\r\n.wobble {\r\n  -webkit-animation-name: wobble;\r\n          animation-name: wobble;\r\n}\r\n\r\n@-webkit-keyframes jello {\r\n  from, 11.1%, to {\r\n    -webkit-transform: none;\r\n            transform: none;\r\n  }\r\n\r\n  22.2% {\r\n    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\r\n            transform: skewX(-12.5deg) skewY(-12.5deg);\r\n  }\r\n\r\n  33.3% {\r\n    -webkit-transform: skewX(6.25deg) skewY(6.25deg);\r\n            transform: skewX(6.25deg) skewY(6.25deg);\r\n  }\r\n\r\n  44.4% {\r\n    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\r\n            transform: skewX(-3.125deg) skewY(-3.125deg);\r\n  }\r\n\r\n  55.5% {\r\n    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\r\n            transform: skewX(1.5625deg) skewY(1.5625deg);\r\n  }\r\n\r\n  66.6% {\r\n    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);\r\n            transform: skewX(-0.78125deg) skewY(-0.78125deg);\r\n  }\r\n\r\n  77.7% {\r\n    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\r\n            transform: skewX(0.390625deg) skewY(0.390625deg);\r\n  }\r\n\r\n  88.8% {\r\n    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\r\n            transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\r\n  }\r\n}\r\n\r\n@keyframes jello {\r\n  from, 11.1%, to {\r\n    -webkit-transform: none;\r\n            transform: none;\r\n  }\r\n\r\n  22.2% {\r\n    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\r\n            transform: skewX(-12.5deg) skewY(-12.5deg);\r\n  }\r\n\r\n  33.3% {\r\n    -webkit-transform: skewX(6.25deg) skewY(6.25deg);\r\n            transform: skewX(6.25deg) skewY(6.25deg);\r\n  }\r\n\r\n  44.4% {\r\n    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\r\n            transform: skewX(-3.125deg) skewY(-3.125deg);\r\n  }\r\n\r\n  55.5% {\r\n    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\r\n            transform: skewX(1.5625deg) skewY(1.5625deg);\r\n  }\r\n\r\n  66.6% {\r\n    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);\r\n            transform: skewX(-0.78125deg) skewY(-0.78125deg);\r\n  }\r\n\r\n  77.7% {\r\n    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\r\n            transform: skewX(0.390625deg) skewY(0.390625deg);\r\n  }\r\n\r\n  88.8% {\r\n    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\r\n            transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\r\n  }\r\n}\r\n\r\n.jello {\r\n  -webkit-animation-name: jello;\r\n          animation-name: jello;\r\n  -webkit-transform-origin: center;\r\n          transform-origin: center;\r\n}\r\n\r\n@-webkit-keyframes bounceIn {\r\n  from, 20%, 40%, 60%, 80%, to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n  }\r\n\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(.3, .3, .3);\r\n            transform: scale3d(.3, .3, .3);\r\n  }\r\n\r\n  20% {\r\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\r\n            transform: scale3d(1.1, 1.1, 1.1);\r\n  }\r\n\r\n  40% {\r\n    -webkit-transform: scale3d(.9, .9, .9);\r\n            transform: scale3d(.9, .9, .9);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\r\n            transform: scale3d(1.03, 1.03, 1.03);\r\n  }\r\n\r\n  80% {\r\n    -webkit-transform: scale3d(.97, .97, .97);\r\n            transform: scale3d(.97, .97, .97);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(1, 1, 1);\r\n            transform: scale3d(1, 1, 1);\r\n  }\r\n}\r\n\r\n@keyframes bounceIn {\r\n  from, 20%, 40%, 60%, 80%, to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n  }\r\n\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(.3, .3, .3);\r\n            transform: scale3d(.3, .3, .3);\r\n  }\r\n\r\n  20% {\r\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\r\n            transform: scale3d(1.1, 1.1, 1.1);\r\n  }\r\n\r\n  40% {\r\n    -webkit-transform: scale3d(.9, .9, .9);\r\n            transform: scale3d(.9, .9, .9);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\r\n            transform: scale3d(1.03, 1.03, 1.03);\r\n  }\r\n\r\n  80% {\r\n    -webkit-transform: scale3d(.97, .97, .97);\r\n            transform: scale3d(.97, .97, .97);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(1, 1, 1);\r\n            transform: scale3d(1, 1, 1);\r\n  }\r\n}\r\n\r\n.bounceIn {\r\n  -webkit-animation-name: bounceIn;\r\n          animation-name: bounceIn;\r\n}\r\n\r\n@-webkit-keyframes bounceInDown {\r\n  from, 60%, 75%, 90%, to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n  }\r\n\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -3000px, 0);\r\n            transform: translate3d(0, -3000px, 0);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, 25px, 0);\r\n            transform: translate3d(0, 25px, 0);\r\n  }\r\n\r\n  75% {\r\n    -webkit-transform: translate3d(0, -10px, 0);\r\n            transform: translate3d(0, -10px, 0);\r\n  }\r\n\r\n  90% {\r\n    -webkit-transform: translate3d(0, 5px, 0);\r\n            transform: translate3d(0, 5px, 0);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: none;\r\n            transform: none;\r\n  }\r\n}\r\n\r\n@keyframes bounceInDown {\r\n  from, 60%, 75%, 90%, to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n  }\r\n\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -3000px, 0);\r\n            transform: translate3d(0, -3000px, 0);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, 25px, 0);\r\n            transform: translate3d(0, 25px, 0);\r\n  }\r\n\r\n  75% {\r\n    -webkit-transform: translate3d(0, -10px, 0);\r\n            transform: translate3d(0, -10px, 0);\r\n  }\r\n\r\n  90% {\r\n    -webkit-transform: translate3d(0, 5px, 0);\r\n            transform: translate3d(0, 5px, 0);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: none;\r\n            transform: none;\r\n  }\r\n}\r\n\r\n.bounceInDown {\r\n  -webkit-animation-name: bounceInDown;\r\n          animation-name: bounceInDown;\r\n}\r\n\r\n@-webkit-keyframes bounceInLeft {\r\n  from, 60%, 75%, 90%, to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n  }\r\n\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(-3000px, 0, 0);\r\n            transform: translate3d(-3000px, 0, 0);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(25px, 0, 0);\r\n            transform: translate3d(25px, 0, 0);\r\n  }\r\n\r\n  75% {\r\n    -webkit-transform: translate3d(-10px, 0, 0);\r\n            transform: translate3d(-10px, 0, 0);\r\n  }\r\n\r\n  90% {\r\n    -webkit-transform: translate3d(5px, 0, 0);\r\n            transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: none;\r\n            transform: none;\r\n  }\r\n}\r\n\r\n@keyframes bounceInLeft {\r\n  from, 60%, 75%, 90%, to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n  }\r\n\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(-3000px, 0, 0);\r\n            transform: translate3d(-3000px, 0, 0);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(25px, 0, 0);\r\n            transform: translate3d(25px, 0, 0);\r\n  }\r\n\r\n  75% {\r\n    -webkit-transform: translate3d(-10px, 0, 0);\r\n            transform: translate3d(-10px, 0, 0);\r\n  }\r\n\r\n  90% {\r\n    -webkit-transform: translate3d(5px, 0, 0);\r\n            transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: none;\r\n            transform: none;\r\n  }\r\n}\r\n\r\n.bounceInLeft {\r\n  -webkit-animation-name: bounceInLeft;\r\n          animation-name: bounceInLeft;\r\n}\r\n\r\n@-webkit-keyframes bounceInRight {\r\n  from, 60%, 75%, 90%, to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n  }\r\n\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(3000px, 0, 0);\r\n            transform: translate3d(3000px, 0, 0);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(-25px, 0, 0);\r\n            transform: translate3d(-25px, 0, 0);\r\n  }\r\n\r\n  75% {\r\n    -webkit-transform: translate3d(10px, 0, 0);\r\n            transform: translate3d(10px, 0, 0);\r\n  }\r\n\r\n  90% {\r\n    -webkit-transform: translate3d(-5px, 0, 0);\r\n            transform: translate3d(-5px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: none;\r\n            transform: none;\r\n  }\r\n}\r\n\r\n@keyframes bounceInRight {\r\n  from, 60%, 75%, 90%, to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n  }\r\n\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(3000px, 0, 0);\r\n            transform: translate3d(3000px, 0, 0);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(-25px, 0, 0);\r\n            transform: translate3d(-25px, 0, 0);\r\n  }\r\n\r\n  75% {\r\n    -webkit-transform: translate3d(10px, 0, 0);\r\n            transform: translate3d(10px, 0, 0);\r\n  }\r\n\r\n  90% {\r\n    -webkit-transform: translate3d(-5px, 0, 0);\r\n            transform: translate3d(-5px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: none;\r\n            transform: none;\r\n  }\r\n}\r\n\r\n.bounceInRight {\r\n  -webkit-animation-name: bounceInRight;\r\n          animation-name: bounceInRight;\r\n}\r\n\r\n@-webkit-keyframes bounceInUp {\r\n  from, 60%, 75%, 90%, to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n  }\r\n\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, 3000px, 0);\r\n            transform: translate3d(0, 3000px, 0);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, -20px, 0);\r\n            transform: translate3d(0, -20px, 0);\r\n  }\r\n\r\n  75% {\r\n    -webkit-transform: translate3d(0, 10px, 0);\r\n            transform: translate3d(0, 10px, 0);\r\n  }\r\n\r\n  90% {\r\n    -webkit-transform: translate3d(0, -5px, 0);\r\n            transform: translate3d(0, -5px, 0);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes bounceInUp {\r\n  from, 60%, 75%, 90%, to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n  }\r\n\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, 3000px, 0);\r\n            transform: translate3d(0, 3000px, 0);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, -20px, 0);\r\n            transform: translate3d(0, -20px, 0);\r\n  }\r\n\r\n  75% {\r\n    -webkit-transform: translate3d(0, 10px, 0);\r\n            transform: translate3d(0, 10px, 0);\r\n  }\r\n\r\n  90% {\r\n    -webkit-transform: translate3d(0, -5px, 0);\r\n            transform: translate3d(0, -5px, 0);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.bounceInUp {\r\n  -webkit-animation-name: bounceInUp;\r\n          animation-name: bounceInUp;\r\n}\r\n\r\n@-webkit-keyframes bounceOut {\r\n  20% {\r\n    -webkit-transform: scale3d(.9, .9, .9);\r\n            transform: scale3d(.9, .9, .9);\r\n  }\r\n\r\n  50%, 55% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\r\n            transform: scale3d(1.1, 1.1, 1.1);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(.3, .3, .3);\r\n            transform: scale3d(.3, .3, .3);\r\n  }\r\n}\r\n\r\n@keyframes bounceOut {\r\n  20% {\r\n    -webkit-transform: scale3d(.9, .9, .9);\r\n            transform: scale3d(.9, .9, .9);\r\n  }\r\n\r\n  50%, 55% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\r\n            transform: scale3d(1.1, 1.1, 1.1);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(.3, .3, .3);\r\n            transform: scale3d(.3, .3, .3);\r\n  }\r\n}\r\n\r\n.bounceOut {\r\n  -webkit-animation-name: bounceOut;\r\n          animation-name: bounceOut;\r\n}\r\n\r\n@-webkit-keyframes bounceOutDown {\r\n  20% {\r\n    -webkit-transform: translate3d(0, 10px, 0);\r\n            transform: translate3d(0, 10px, 0);\r\n  }\r\n\r\n  40%, 45% {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, -20px, 0);\r\n            transform: translate3d(0, -20px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, 2000px, 0);\r\n            transform: translate3d(0, 2000px, 0);\r\n  }\r\n}\r\n\r\n@keyframes bounceOutDown {\r\n  20% {\r\n    -webkit-transform: translate3d(0, 10px, 0);\r\n            transform: translate3d(0, 10px, 0);\r\n  }\r\n\r\n  40%, 45% {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, -20px, 0);\r\n            transform: translate3d(0, -20px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, 2000px, 0);\r\n            transform: translate3d(0, 2000px, 0);\r\n  }\r\n}\r\n\r\n.bounceOutDown {\r\n  -webkit-animation-name: bounceOutDown;\r\n          animation-name: bounceOutDown;\r\n}\r\n\r\n@-webkit-keyframes bounceOutLeft {\r\n  20% {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(20px, 0, 0);\r\n            transform: translate3d(20px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(-2000px, 0, 0);\r\n            transform: translate3d(-2000px, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes bounceOutLeft {\r\n  20% {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(20px, 0, 0);\r\n            transform: translate3d(20px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(-2000px, 0, 0);\r\n            transform: translate3d(-2000px, 0, 0);\r\n  }\r\n}\r\n\r\n.bounceOutLeft {\r\n  -webkit-animation-name: bounceOutLeft;\r\n          animation-name: bounceOutLeft;\r\n}\r\n\r\n@-webkit-keyframes bounceOutRight {\r\n  20% {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(-20px, 0, 0);\r\n            transform: translate3d(-20px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(2000px, 0, 0);\r\n            transform: translate3d(2000px, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes bounceOutRight {\r\n  20% {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(-20px, 0, 0);\r\n            transform: translate3d(-20px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(2000px, 0, 0);\r\n            transform: translate3d(2000px, 0, 0);\r\n  }\r\n}\r\n\r\n.bounceOutRight {\r\n  -webkit-animation-name: bounceOutRight;\r\n          animation-name: bounceOutRight;\r\n}\r\n\r\n@-webkit-keyframes bounceOutUp {\r\n  20% {\r\n    -webkit-transform: translate3d(0, -10px, 0);\r\n            transform: translate3d(0, -10px, 0);\r\n  }\r\n\r\n  40%, 45% {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, 20px, 0);\r\n            transform: translate3d(0, 20px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -2000px, 0);\r\n            transform: translate3d(0, -2000px, 0);\r\n  }\r\n}\r\n\r\n@keyframes bounceOutUp {\r\n  20% {\r\n    -webkit-transform: translate3d(0, -10px, 0);\r\n            transform: translate3d(0, -10px, 0);\r\n  }\r\n\r\n  40%, 45% {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, 20px, 0);\r\n            transform: translate3d(0, 20px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -2000px, 0);\r\n            transform: translate3d(0, -2000px, 0);\r\n  }\r\n}\r\n\r\n.bounceOutUp {\r\n  -webkit-animation-name: bounceOutUp;\r\n          animation-name: bounceOutUp;\r\n}\r\n\r\n@-webkit-keyframes fadeIn {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes fadeIn {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.fadeIn {\r\n  -webkit-animation-name: fadeIn;\r\n          animation-name: fadeIn;\r\n}\r\n\r\n@-webkit-keyframes fadeInDown {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n            transform: translate3d(0, -100%, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n            transform: none;\r\n  }\r\n}\r\n\r\n@keyframes fadeInDown {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n            transform: translate3d(0, -100%, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n            transform: none;\r\n  }\r\n}\r\n\r\n.fadeInDown {\r\n  -webkit-animation-name: fadeInDown;\r\n          animation-name: fadeInDown;\r\n}\r\n\r\n@-webkit-keyframes fadeInDownBig {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -2000px, 0);\r\n            transform: translate3d(0, -2000px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n            transform: none;\r\n  }\r\n}\r\n\r\n@keyframes fadeInDownBig {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -2000px, 0);\r\n            transform: translate3d(0, -2000px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n            transform: none;\r\n  }\r\n}\r\n\r\n.fadeInDownBig {\r\n  -webkit-animation-name: fadeInDownBig;\r\n          animation-name: fadeInDownBig;\r\n}\r\n\r\n@-webkit-keyframes fadeInLeft {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(-100%, 0, 0);\r\n            transform: translate3d(-100%, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n            transform: none;\r\n  }\r\n}\r\n\r\n@keyframes fadeInLeft {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(-100%, 0, 0);\r\n            transform: translate3d(-100%, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n            transform: none;\r\n  }\r\n}\r\n\r\n.fadeInLeft {\r\n  -webkit-animation-name: fadeInLeft;\r\n          animation-name: fadeInLeft;\r\n}\r\n\r\n@-webkit-keyframes fadeInLeftBig {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(-2000px, 0, 0);\r\n            transform: translate3d(-2000px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n            transform: none;\r\n  }\r\n}\r\n\r\n@keyframes fadeInLeftBig {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(-2000px, 0, 0);\r\n            transform: translate3d(-2000px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n            transform: none;\r\n  }\r\n}\r\n\r\n.fadeInLeftBig {\r\n  -webkit-animation-name: fadeInLeftBig;\r\n          animation-name: fadeInLeftBig;\r\n}\r\n\r\n@-webkit-keyframes fadeInRight {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(100%, 0, 0);\r\n            transform: translate3d(100%, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n            transform: none;\r\n  }\r\n}\r\n\r\n@keyframes fadeInRight {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(100%, 0, 0);\r\n            transform: translate3d(100%, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n            transform: none;\r\n  }\r\n}\r\n\r\n.fadeInRight {\r\n  -webkit-animation-name: fadeInRight;\r\n          animation-name: fadeInRight;\r\n}\r\n\r\n@-webkit-keyframes fadeInRightBig {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(2000px, 0, 0);\r\n            transform: translate3d(2000px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n            transform: none;\r\n  }\r\n}\r\n\r\n@keyframes fadeInRightBig {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(2000px, 0, 0);\r\n            transform: translate3d(2000px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n            transform: none;\r\n  }\r\n}\r\n\r\n.fadeInRightBig {\r\n  -webkit-animation-name: fadeInRightBig;\r\n          animation-name: fadeInRightBig;\r\n}\r\n\r\n@-webkit-keyframes fadeInUp {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, 100%, 0);\r\n            transform: translate3d(0, 100%, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n            transform: none;\r\n  }\r\n}\r\n\r\n@keyframes fadeInUp {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, 100%, 0);\r\n            transform: translate3d(0, 100%, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n            transform: none;\r\n  }\r\n}\r\n\r\n.fadeInUp {\r\n  -webkit-animation-name: fadeInUp;\r\n          animation-name: fadeInUp;\r\n}\r\n\r\n@-webkit-keyframes fadeInUpBig {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, 2000px, 0);\r\n            transform: translate3d(0, 2000px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n            transform: none;\r\n  }\r\n}\r\n\r\n@keyframes fadeInUpBig {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, 2000px, 0);\r\n            transform: translate3d(0, 2000px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n            transform: none;\r\n  }\r\n}\r\n\r\n.fadeInUpBig {\r\n  -webkit-animation-name: fadeInUpBig;\r\n          animation-name: fadeInUpBig;\r\n}\r\n\r\n@-webkit-keyframes fadeOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes fadeOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.fadeOut {\r\n  -webkit-animation-name: fadeOut;\r\n          animation-name: fadeOut;\r\n}\r\n\r\n@-webkit-keyframes fadeOutDown {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, 100%, 0);\r\n            transform: translate3d(0, 100%, 0);\r\n  }\r\n}\r\n\r\n@keyframes fadeOutDown {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, 100%, 0);\r\n            transform: translate3d(0, 100%, 0);\r\n  }\r\n}\r\n\r\n.fadeOutDown {\r\n  -webkit-animation-name: fadeOutDown;\r\n          animation-name: fadeOutDown;\r\n}\r\n\r\n@-webkit-keyframes fadeOutDownBig {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, 2000px, 0);\r\n            transform: translate3d(0, 2000px, 0);\r\n  }\r\n}\r\n\r\n@keyframes fadeOutDownBig {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, 2000px, 0);\r\n            transform: translate3d(0, 2000px, 0);\r\n  }\r\n}\r\n\r\n.fadeOutDownBig {\r\n  -webkit-animation-name: fadeOutDownBig;\r\n          animation-name: fadeOutDownBig;\r\n}\r\n\r\n@-webkit-keyframes fadeOutLeft {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(-100%, 0, 0);\r\n            transform: translate3d(-100%, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes fadeOutLeft {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(-100%, 0, 0);\r\n            transform: translate3d(-100%, 0, 0);\r\n  }\r\n}\r\n\r\n.fadeOutLeft {\r\n  -webkit-animation-name: fadeOutLeft;\r\n          animation-name: fadeOutLeft;\r\n}\r\n\r\n@-webkit-keyframes fadeOutLeftBig {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(-2000px, 0, 0);\r\n            transform: translate3d(-2000px, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes fadeOutLeftBig {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(-2000px, 0, 0);\r\n            transform: translate3d(-2000px, 0, 0);\r\n  }\r\n}\r\n\r\n.fadeOutLeftBig {\r\n  -webkit-animation-name: fadeOutLeftBig;\r\n          animation-name: fadeOutLeftBig;\r\n}\r\n\r\n@-webkit-keyframes fadeOutRight {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(100%, 0, 0);\r\n            transform: translate3d(100%, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes fadeOutRight {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(100%, 0, 0);\r\n            transform: translate3d(100%, 0, 0);\r\n  }\r\n}\r\n\r\n.fadeOutRight {\r\n  -webkit-animation-name: fadeOutRight;\r\n          animation-name: fadeOutRight;\r\n}\r\n\r\n@-webkit-keyframes fadeOutRightBig {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(2000px, 0, 0);\r\n            transform: translate3d(2000px, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes fadeOutRightBig {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(2000px, 0, 0);\r\n            transform: translate3d(2000px, 0, 0);\r\n  }\r\n}\r\n\r\n.fadeOutRightBig {\r\n  -webkit-animation-name: fadeOutRightBig;\r\n          animation-name: fadeOutRightBig;\r\n}\r\n\r\n@-webkit-keyframes fadeOutUp {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n            transform: translate3d(0, -100%, 0);\r\n  }\r\n}\r\n\r\n@keyframes fadeOutUp {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n            transform: translate3d(0, -100%, 0);\r\n  }\r\n}\r\n\r\n.fadeOutUp {\r\n  -webkit-animation-name: fadeOutUp;\r\n          animation-name: fadeOutUp;\r\n}\r\n\r\n@-webkit-keyframes fadeOutUpBig {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -2000px, 0);\r\n            transform: translate3d(0, -2000px, 0);\r\n  }\r\n}\r\n\r\n@keyframes fadeOutUpBig {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -2000px, 0);\r\n            transform: translate3d(0, -2000px, 0);\r\n  }\r\n}\r\n\r\n.fadeOutUpBig {\r\n  -webkit-animation-name: fadeOutUpBig;\r\n          animation-name: fadeOutUpBig;\r\n}\r\n\r\n@-webkit-keyframes flip {\r\n  from {\r\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\r\n            transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\r\n    -webkit-animation-timing-function: ease-out;\r\n            animation-timing-function: ease-out;\r\n  }\r\n\r\n  40% {\r\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\r\n            transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\r\n    -webkit-animation-timing-function: ease-out;\r\n            animation-timing-function: ease-out;\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\r\n            transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\r\n    -webkit-animation-timing-function: ease-in;\r\n            animation-timing-function: ease-in;\r\n  }\r\n\r\n  80% {\r\n    -webkit-transform: perspective(400px) scale3d(.95, .95, .95);\r\n            transform: perspective(400px) scale3d(.95, .95, .95);\r\n    -webkit-animation-timing-function: ease-in;\r\n            animation-timing-function: ease-in;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: perspective(400px);\r\n            transform: perspective(400px);\r\n    -webkit-animation-timing-function: ease-in;\r\n            animation-timing-function: ease-in;\r\n  }\r\n}\r\n\r\n@keyframes flip {\r\n  from {\r\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\r\n            transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\r\n    -webkit-animation-timing-function: ease-out;\r\n            animation-timing-function: ease-out;\r\n  }\r\n\r\n  40% {\r\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\r\n            transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\r\n    -webkit-animation-timing-function: ease-out;\r\n            animation-timing-function: ease-out;\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\r\n            transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\r\n    -webkit-animation-timing-function: ease-in;\r\n            animation-timing-function: ease-in;\r\n  }\r\n\r\n  80% {\r\n    -webkit-transform: perspective(400px) scale3d(.95, .95, .95);\r\n            transform: perspective(400px) scale3d(.95, .95, .95);\r\n    -webkit-animation-timing-function: ease-in;\r\n            animation-timing-function: ease-in;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: perspective(400px);\r\n            transform: perspective(400px);\r\n    -webkit-animation-timing-function: ease-in;\r\n            animation-timing-function: ease-in;\r\n  }\r\n}\r\n\r\n.animated.flip {\r\n  -webkit-backface-visibility: visible;\r\n  backface-visibility: visible;\r\n  -webkit-animation-name: flip;\r\n          animation-name: flip;\r\n}\r\n\r\n@-webkit-keyframes flipInX {\r\n  from {\r\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\r\n            transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\r\n    -webkit-animation-timing-function: ease-in;\r\n            animation-timing-function: ease-in;\r\n    opacity: 0;\r\n  }\r\n\r\n  40% {\r\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\r\n            transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\r\n    -webkit-animation-timing-function: ease-in;\r\n            animation-timing-function: ease-in;\r\n  }\r\n\r\n  60% {\r\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\r\n            transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  80% {\r\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\r\n            transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: perspective(400px);\r\n            transform: perspective(400px);\r\n  }\r\n}\r\n\r\n@keyframes flipInX {\r\n  from {\r\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\r\n            transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\r\n    -webkit-animation-timing-function: ease-in;\r\n            animation-timing-function: ease-in;\r\n    opacity: 0;\r\n  }\r\n\r\n  40% {\r\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\r\n            transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\r\n    -webkit-animation-timing-function: ease-in;\r\n            animation-timing-function: ease-in;\r\n  }\r\n\r\n  60% {\r\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\r\n            transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  80% {\r\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\r\n            transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: perspective(400px);\r\n            transform: perspective(400px);\r\n  }\r\n}\r\n\r\n.flipInX {\r\n  -webkit-backface-visibility: visible !important;\r\n  backface-visibility: visible !important;\r\n  -webkit-animation-name: flipInX;\r\n          animation-name: flipInX;\r\n}\r\n\r\n@-webkit-keyframes flipInY {\r\n  from {\r\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\r\n            transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\r\n    -webkit-animation-timing-function: ease-in;\r\n            animation-timing-function: ease-in;\r\n    opacity: 0;\r\n  }\r\n\r\n  40% {\r\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\r\n            transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\r\n    -webkit-animation-timing-function: ease-in;\r\n            animation-timing-function: ease-in;\r\n  }\r\n\r\n  60% {\r\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\r\n            transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  80% {\r\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\r\n            transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: perspective(400px);\r\n            transform: perspective(400px);\r\n  }\r\n}\r\n\r\n@keyframes flipInY {\r\n  from {\r\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\r\n            transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\r\n    -webkit-animation-timing-function: ease-in;\r\n            animation-timing-function: ease-in;\r\n    opacity: 0;\r\n  }\r\n\r\n  40% {\r\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\r\n            transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\r\n    -webkit-animation-timing-function: ease-in;\r\n            animation-timing-function: ease-in;\r\n  }\r\n\r\n  60% {\r\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\r\n            transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  80% {\r\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\r\n            transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: perspective(400px);\r\n            transform: perspective(400px);\r\n  }\r\n}\r\n\r\n.flipInY {\r\n  -webkit-backface-visibility: visible !important;\r\n  backface-visibility: visible !important;\r\n  -webkit-animation-name: flipInY;\r\n          animation-name: flipInY;\r\n}\r\n\r\n@-webkit-keyframes flipOutX {\r\n  from {\r\n    -webkit-transform: perspective(400px);\r\n            transform: perspective(400px);\r\n  }\r\n\r\n  30% {\r\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\r\n            transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\r\n            transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes flipOutX {\r\n  from {\r\n    -webkit-transform: perspective(400px);\r\n            transform: perspective(400px);\r\n  }\r\n\r\n  30% {\r\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\r\n            transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\r\n            transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.flipOutX {\r\n  -webkit-animation-name: flipOutX;\r\n          animation-name: flipOutX;\r\n  -webkit-backface-visibility: visible !important;\r\n  backface-visibility: visible !important;\r\n}\r\n\r\n@-webkit-keyframes flipOutY {\r\n  from {\r\n    -webkit-transform: perspective(400px);\r\n            transform: perspective(400px);\r\n  }\r\n\r\n  30% {\r\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\r\n            transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\r\n            transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes flipOutY {\r\n  from {\r\n    -webkit-transform: perspective(400px);\r\n            transform: perspective(400px);\r\n  }\r\n\r\n  30% {\r\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\r\n            transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\r\n            transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.flipOutY {\r\n  -webkit-backface-visibility: visible !important;\r\n  backface-visibility: visible !important;\r\n  -webkit-animation-name: flipOutY;\r\n          animation-name: flipOutY;\r\n}\r\n\r\n@-webkit-keyframes lightSpeedIn {\r\n  from {\r\n    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);\r\n            transform: translate3d(100%, 0, 0) skewX(-30deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  60% {\r\n    -webkit-transform: skewX(20deg);\r\n            transform: skewX(20deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  80% {\r\n    -webkit-transform: skewX(-5deg);\r\n            transform: skewX(-5deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: none;\r\n            transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes lightSpeedIn {\r\n  from {\r\n    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);\r\n            transform: translate3d(100%, 0, 0) skewX(-30deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  60% {\r\n    -webkit-transform: skewX(20deg);\r\n            transform: skewX(20deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  80% {\r\n    -webkit-transform: skewX(-5deg);\r\n            transform: skewX(-5deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: none;\r\n            transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.lightSpeedIn {\r\n  -webkit-animation-name: lightSpeedIn;\r\n          animation-name: lightSpeedIn;\r\n  -webkit-animation-timing-function: ease-out;\r\n          animation-timing-function: ease-out;\r\n}\r\n\r\n@-webkit-keyframes lightSpeedOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);\r\n            transform: translate3d(100%, 0, 0) skewX(30deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes lightSpeedOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);\r\n            transform: translate3d(100%, 0, 0) skewX(30deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.lightSpeedOut {\r\n  -webkit-animation-name: lightSpeedOut;\r\n          animation-name: lightSpeedOut;\r\n  -webkit-animation-timing-function: ease-in;\r\n          animation-timing-function: ease-in;\r\n}\r\n\r\n@-webkit-keyframes rotateIn {\r\n  from {\r\n    -webkit-transform-origin: center;\r\n            transform-origin: center;\r\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\r\n            transform: rotate3d(0, 0, 1, -200deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: center;\r\n            transform-origin: center;\r\n    -webkit-transform: none;\r\n            transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes rotateIn {\r\n  from {\r\n    -webkit-transform-origin: center;\r\n            transform-origin: center;\r\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\r\n            transform: rotate3d(0, 0, 1, -200deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: center;\r\n            transform-origin: center;\r\n    -webkit-transform: none;\r\n            transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.rotateIn {\r\n  -webkit-animation-name: rotateIn;\r\n          animation-name: rotateIn;\r\n}\r\n\r\n@-webkit-keyframes rotateInDownLeft {\r\n  from {\r\n    -webkit-transform-origin: left bottom;\r\n            transform-origin: left bottom;\r\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\r\n            transform: rotate3d(0, 0, 1, -45deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: left bottom;\r\n            transform-origin: left bottom;\r\n    -webkit-transform: none;\r\n            transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes rotateInDownLeft {\r\n  from {\r\n    -webkit-transform-origin: left bottom;\r\n            transform-origin: left bottom;\r\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\r\n            transform: rotate3d(0, 0, 1, -45deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: left bottom;\r\n            transform-origin: left bottom;\r\n    -webkit-transform: none;\r\n            transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.rotateInDownLeft {\r\n  -webkit-animation-name: rotateInDownLeft;\r\n          animation-name: rotateInDownLeft;\r\n}\r\n\r\n@-webkit-keyframes rotateInDownRight {\r\n  from {\r\n    -webkit-transform-origin: right bottom;\r\n            transform-origin: right bottom;\r\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\r\n            transform: rotate3d(0, 0, 1, 45deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: right bottom;\r\n            transform-origin: right bottom;\r\n    -webkit-transform: none;\r\n            transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes rotateInDownRight {\r\n  from {\r\n    -webkit-transform-origin: right bottom;\r\n            transform-origin: right bottom;\r\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\r\n            transform: rotate3d(0, 0, 1, 45deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: right bottom;\r\n            transform-origin: right bottom;\r\n    -webkit-transform: none;\r\n            transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.rotateInDownRight {\r\n  -webkit-animation-name: rotateInDownRight;\r\n          animation-name: rotateInDownRight;\r\n}\r\n\r\n@-webkit-keyframes rotateInUpLeft {\r\n  from {\r\n    -webkit-transform-origin: left bottom;\r\n            transform-origin: left bottom;\r\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\r\n            transform: rotate3d(0, 0, 1, 45deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: left bottom;\r\n            transform-origin: left bottom;\r\n    -webkit-transform: none;\r\n            transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes rotateInUpLeft {\r\n  from {\r\n    -webkit-transform-origin: left bottom;\r\n            transform-origin: left bottom;\r\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\r\n            transform: rotate3d(0, 0, 1, 45deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: left bottom;\r\n            transform-origin: left bottom;\r\n    -webkit-transform: none;\r\n            transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.rotateInUpLeft {\r\n  -webkit-animation-name: rotateInUpLeft;\r\n          animation-name: rotateInUpLeft;\r\n}\r\n\r\n@-webkit-keyframes rotateInUpRight {\r\n  from {\r\n    -webkit-transform-origin: right bottom;\r\n            transform-origin: right bottom;\r\n    -webkit-transform: rotate3d(0, 0, 1, -90deg);\r\n            transform: rotate3d(0, 0, 1, -90deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: right bottom;\r\n            transform-origin: right bottom;\r\n    -webkit-transform: none;\r\n            transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes rotateInUpRight {\r\n  from {\r\n    -webkit-transform-origin: right bottom;\r\n            transform-origin: right bottom;\r\n    -webkit-transform: rotate3d(0, 0, 1, -90deg);\r\n            transform: rotate3d(0, 0, 1, -90deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: right bottom;\r\n            transform-origin: right bottom;\r\n    -webkit-transform: none;\r\n            transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.rotateInUpRight {\r\n  -webkit-animation-name: rotateInUpRight;\r\n          animation-name: rotateInUpRight;\r\n}\r\n\r\n@-webkit-keyframes rotateOut {\r\n  from {\r\n    -webkit-transform-origin: center;\r\n            transform-origin: center;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: center;\r\n            transform-origin: center;\r\n    -webkit-transform: rotate3d(0, 0, 1, 200deg);\r\n            transform: rotate3d(0, 0, 1, 200deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes rotateOut {\r\n  from {\r\n    -webkit-transform-origin: center;\r\n            transform-origin: center;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: center;\r\n            transform-origin: center;\r\n    -webkit-transform: rotate3d(0, 0, 1, 200deg);\r\n            transform: rotate3d(0, 0, 1, 200deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.rotateOut {\r\n  -webkit-animation-name: rotateOut;\r\n          animation-name: rotateOut;\r\n}\r\n\r\n@-webkit-keyframes rotateOutDownLeft {\r\n  from {\r\n    -webkit-transform-origin: left bottom;\r\n            transform-origin: left bottom;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: left bottom;\r\n            transform-origin: left bottom;\r\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\r\n            transform: rotate3d(0, 0, 1, 45deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes rotateOutDownLeft {\r\n  from {\r\n    -webkit-transform-origin: left bottom;\r\n            transform-origin: left bottom;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: left bottom;\r\n            transform-origin: left bottom;\r\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\r\n            transform: rotate3d(0, 0, 1, 45deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.rotateOutDownLeft {\r\n  -webkit-animation-name: rotateOutDownLeft;\r\n          animation-name: rotateOutDownLeft;\r\n}\r\n\r\n@-webkit-keyframes rotateOutDownRight {\r\n  from {\r\n    -webkit-transform-origin: right bottom;\r\n            transform-origin: right bottom;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: right bottom;\r\n            transform-origin: right bottom;\r\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\r\n            transform: rotate3d(0, 0, 1, -45deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes rotateOutDownRight {\r\n  from {\r\n    -webkit-transform-origin: right bottom;\r\n            transform-origin: right bottom;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: right bottom;\r\n            transform-origin: right bottom;\r\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\r\n            transform: rotate3d(0, 0, 1, -45deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.rotateOutDownRight {\r\n  -webkit-animation-name: rotateOutDownRight;\r\n          animation-name: rotateOutDownRight;\r\n}\r\n\r\n@-webkit-keyframes rotateOutUpLeft {\r\n  from {\r\n    -webkit-transform-origin: left bottom;\r\n            transform-origin: left bottom;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: left bottom;\r\n            transform-origin: left bottom;\r\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\r\n            transform: rotate3d(0, 0, 1, -45deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes rotateOutUpLeft {\r\n  from {\r\n    -webkit-transform-origin: left bottom;\r\n            transform-origin: left bottom;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: left bottom;\r\n            transform-origin: left bottom;\r\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\r\n            transform: rotate3d(0, 0, 1, -45deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.rotateOutUpLeft {\r\n  -webkit-animation-name: rotateOutUpLeft;\r\n          animation-name: rotateOutUpLeft;\r\n}\r\n\r\n@-webkit-keyframes rotateOutUpRight {\r\n  from {\r\n    -webkit-transform-origin: right bottom;\r\n            transform-origin: right bottom;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: right bottom;\r\n            transform-origin: right bottom;\r\n    -webkit-transform: rotate3d(0, 0, 1, 90deg);\r\n            transform: rotate3d(0, 0, 1, 90deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes rotateOutUpRight {\r\n  from {\r\n    -webkit-transform-origin: right bottom;\r\n            transform-origin: right bottom;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: right bottom;\r\n            transform-origin: right bottom;\r\n    -webkit-transform: rotate3d(0, 0, 1, 90deg);\r\n            transform: rotate3d(0, 0, 1, 90deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.rotateOutUpRight {\r\n  -webkit-animation-name: rotateOutUpRight;\r\n          animation-name: rotateOutUpRight;\r\n}\r\n\r\n@-webkit-keyframes hinge {\r\n  0% {\r\n    -webkit-transform-origin: top left;\r\n            transform-origin: top left;\r\n    -webkit-animation-timing-function: ease-in-out;\r\n            animation-timing-function: ease-in-out;\r\n  }\r\n\r\n  20%, 60% {\r\n    -webkit-transform: rotate3d(0, 0, 1, 80deg);\r\n            transform: rotate3d(0, 0, 1, 80deg);\r\n    -webkit-transform-origin: top left;\r\n            transform-origin: top left;\r\n    -webkit-animation-timing-function: ease-in-out;\r\n            animation-timing-function: ease-in-out;\r\n  }\r\n\r\n  40%, 80% {\r\n    -webkit-transform: rotate3d(0, 0, 1, 60deg);\r\n            transform: rotate3d(0, 0, 1, 60deg);\r\n    -webkit-transform-origin: top left;\r\n            transform-origin: top left;\r\n    -webkit-animation-timing-function: ease-in-out;\r\n            animation-timing-function: ease-in-out;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(0, 700px, 0);\r\n            transform: translate3d(0, 700px, 0);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes hinge {\r\n  0% {\r\n    -webkit-transform-origin: top left;\r\n            transform-origin: top left;\r\n    -webkit-animation-timing-function: ease-in-out;\r\n            animation-timing-function: ease-in-out;\r\n  }\r\n\r\n  20%, 60% {\r\n    -webkit-transform: rotate3d(0, 0, 1, 80deg);\r\n            transform: rotate3d(0, 0, 1, 80deg);\r\n    -webkit-transform-origin: top left;\r\n            transform-origin: top left;\r\n    -webkit-animation-timing-function: ease-in-out;\r\n            animation-timing-function: ease-in-out;\r\n  }\r\n\r\n  40%, 80% {\r\n    -webkit-transform: rotate3d(0, 0, 1, 60deg);\r\n            transform: rotate3d(0, 0, 1, 60deg);\r\n    -webkit-transform-origin: top left;\r\n            transform-origin: top left;\r\n    -webkit-animation-timing-function: ease-in-out;\r\n            animation-timing-function: ease-in-out;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(0, 700px, 0);\r\n            transform: translate3d(0, 700px, 0);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.hinge {\r\n  -webkit-animation-name: hinge;\r\n          animation-name: hinge;\r\n}\r\n\r\n@-webkit-keyframes jackInTheBox {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: scale(0.1) rotate(30deg);\r\n            transform: scale(0.1) rotate(30deg);\r\n    -webkit-transform-origin: center bottom;\r\n            transform-origin: center bottom;\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: rotate(-10deg);\r\n            transform: rotate(-10deg);\r\n  }\r\n\r\n  70% {\r\n    -webkit-transform: rotate(3deg);\r\n            transform: rotate(3deg);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n  }\r\n}\r\n\r\n@keyframes jackInTheBox {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: scale(0.1) rotate(30deg);\r\n            transform: scale(0.1) rotate(30deg);\r\n    -webkit-transform-origin: center bottom;\r\n            transform-origin: center bottom;\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: rotate(-10deg);\r\n            transform: rotate(-10deg);\r\n  }\r\n\r\n  70% {\r\n    -webkit-transform: rotate(3deg);\r\n            transform: rotate(3deg);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n  }\r\n}\r\n\r\n.jackInTheBox {\r\n  -webkit-animation-name: jackInTheBox;\r\n          animation-name: jackInTheBox;\r\n}\r\n\r\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\r\n\r\n@-webkit-keyframes rollIn {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\r\n            transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n            transform: none;\r\n  }\r\n}\r\n\r\n@keyframes rollIn {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\r\n            transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n            transform: none;\r\n  }\r\n}\r\n\r\n.rollIn {\r\n  -webkit-animation-name: rollIn;\r\n          animation-name: rollIn;\r\n}\r\n\r\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\r\n\r\n@-webkit-keyframes rollOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\r\n            transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\r\n  }\r\n}\r\n\r\n@keyframes rollOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\r\n            transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\r\n  }\r\n}\r\n\r\n.rollOut {\r\n  -webkit-animation-name: rollOut;\r\n          animation-name: rollOut;\r\n}\r\n\r\n@-webkit-keyframes zoomIn {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(.3, .3, .3);\r\n            transform: scale3d(.3, .3, .3);\r\n  }\r\n\r\n  50% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes zoomIn {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(.3, .3, .3);\r\n            transform: scale3d(.3, .3, .3);\r\n  }\r\n\r\n  50% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.zoomIn {\r\n  -webkit-animation-name: zoomIn;\r\n          animation-name: zoomIn;\r\n}\r\n\r\n@-webkit-keyframes zoomInDown {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\r\n            transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n            animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\r\n            transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n\r\n@keyframes zoomInDown {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\r\n            transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n            animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\r\n            transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n\r\n.zoomInDown {\r\n  -webkit-animation-name: zoomInDown;\r\n          animation-name: zoomInDown;\r\n}\r\n\r\n@-webkit-keyframes zoomInLeft {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\r\n            transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n            animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\r\n            transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n\r\n@keyframes zoomInLeft {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\r\n            transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n            animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\r\n            transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n\r\n.zoomInLeft {\r\n  -webkit-animation-name: zoomInLeft;\r\n          animation-name: zoomInLeft;\r\n}\r\n\r\n@-webkit-keyframes zoomInRight {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\r\n            transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n            animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\r\n            transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n\r\n@keyframes zoomInRight {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\r\n            transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n            animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\r\n            transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n\r\n.zoomInRight {\r\n  -webkit-animation-name: zoomInRight;\r\n          animation-name: zoomInRight;\r\n}\r\n\r\n@-webkit-keyframes zoomInUp {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\r\n            transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n            animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\r\n            transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n\r\n@keyframes zoomInUp {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\r\n            transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n            animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\r\n            transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n\r\n.zoomInUp {\r\n  -webkit-animation-name: zoomInUp;\r\n          animation-name: zoomInUp;\r\n}\r\n\r\n@-webkit-keyframes zoomOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  50% {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(.3, .3, .3);\r\n            transform: scale3d(.3, .3, .3);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes zoomOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  50% {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(.3, .3, .3);\r\n            transform: scale3d(.3, .3, .3);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.zoomOut {\r\n  -webkit-animation-name: zoomOut;\r\n          animation-name: zoomOut;\r\n}\r\n\r\n@-webkit-keyframes zoomOutDown {\r\n  40% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\r\n            transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n            animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\r\n            transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\r\n    -webkit-transform-origin: center bottom;\r\n            transform-origin: center bottom;\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n\r\n@keyframes zoomOutDown {\r\n  40% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\r\n            transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n            animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\r\n            transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\r\n    -webkit-transform-origin: center bottom;\r\n            transform-origin: center bottom;\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n\r\n.zoomOutDown {\r\n  -webkit-animation-name: zoomOutDown;\r\n          animation-name: zoomOutDown;\r\n}\r\n\r\n@-webkit-keyframes zoomOutLeft {\r\n  40% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\r\n            transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: scale(.1) translate3d(-2000px, 0, 0);\r\n            transform: scale(.1) translate3d(-2000px, 0, 0);\r\n    -webkit-transform-origin: left center;\r\n            transform-origin: left center;\r\n  }\r\n}\r\n\r\n@keyframes zoomOutLeft {\r\n  40% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\r\n            transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: scale(.1) translate3d(-2000px, 0, 0);\r\n            transform: scale(.1) translate3d(-2000px, 0, 0);\r\n    -webkit-transform-origin: left center;\r\n            transform-origin: left center;\r\n  }\r\n}\r\n\r\n.zoomOutLeft {\r\n  -webkit-animation-name: zoomOutLeft;\r\n          animation-name: zoomOutLeft;\r\n}\r\n\r\n@-webkit-keyframes zoomOutRight {\r\n  40% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\r\n            transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: scale(.1) translate3d(2000px, 0, 0);\r\n            transform: scale(.1) translate3d(2000px, 0, 0);\r\n    -webkit-transform-origin: right center;\r\n            transform-origin: right center;\r\n  }\r\n}\r\n\r\n@keyframes zoomOutRight {\r\n  40% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\r\n            transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: scale(.1) translate3d(2000px, 0, 0);\r\n            transform: scale(.1) translate3d(2000px, 0, 0);\r\n    -webkit-transform-origin: right center;\r\n            transform-origin: right center;\r\n  }\r\n}\r\n\r\n.zoomOutRight {\r\n  -webkit-animation-name: zoomOutRight;\r\n          animation-name: zoomOutRight;\r\n}\r\n\r\n@-webkit-keyframes zoomOutUp {\r\n  40% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\r\n            transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n            animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\r\n            transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\r\n    -webkit-transform-origin: center bottom;\r\n            transform-origin: center bottom;\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n\r\n@keyframes zoomOutUp {\r\n  40% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\r\n            transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n            animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\r\n            transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\r\n    -webkit-transform-origin: center bottom;\r\n            transform-origin: center bottom;\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n\r\n.zoomOutUp {\r\n  -webkit-animation-name: zoomOutUp;\r\n          animation-name: zoomOutUp;\r\n}\r\n\r\n@-webkit-keyframes slideInDown {\r\n  from {\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n            transform: translate3d(0, -100%, 0);\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes slideInDown {\r\n  from {\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n            transform: translate3d(0, -100%, 0);\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.slideInDown {\r\n  -webkit-animation-name: slideInDown;\r\n          animation-name: slideInDown;\r\n}\r\n\r\n@-webkit-keyframes slideInLeft {\r\n  from {\r\n    -webkit-transform: translate3d(-100%, 0, 0);\r\n            transform: translate3d(-100%, 0, 0);\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes slideInLeft {\r\n  from {\r\n    -webkit-transform: translate3d(-100%, 0, 0);\r\n            transform: translate3d(-100%, 0, 0);\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.slideInLeft {\r\n  -webkit-animation-name: slideInLeft;\r\n          animation-name: slideInLeft;\r\n}\r\n\r\n@-webkit-keyframes slideInRight {\r\n  from {\r\n    -webkit-transform: translate3d(100%, 0, 0);\r\n            transform: translate3d(100%, 0, 0);\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes slideInRight {\r\n  from {\r\n    -webkit-transform: translate3d(100%, 0, 0);\r\n            transform: translate3d(100%, 0, 0);\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.slideInRight {\r\n  -webkit-animation-name: slideInRight;\r\n          animation-name: slideInRight;\r\n}\r\n\r\n@-webkit-keyframes slideInUp {\r\n  from {\r\n    -webkit-transform: translate3d(0, 100%, 0);\r\n            transform: translate3d(0, 100%, 0);\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes slideInUp {\r\n  from {\r\n    -webkit-transform: translate3d(0, 100%, 0);\r\n            transform: translate3d(0, 100%, 0);\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.slideInUp {\r\n  -webkit-animation-name: slideInUp;\r\n          animation-name: slideInUp;\r\n}\r\n\r\n@-webkit-keyframes slideOutDown {\r\n  from {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: hidden;\r\n    -webkit-transform: translate3d(0, 100%, 0);\r\n            transform: translate3d(0, 100%, 0);\r\n  }\r\n}\r\n\r\n@keyframes slideOutDown {\r\n  from {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: hidden;\r\n    -webkit-transform: translate3d(0, 100%, 0);\r\n            transform: translate3d(0, 100%, 0);\r\n  }\r\n}\r\n\r\n.slideOutDown {\r\n  -webkit-animation-name: slideOutDown;\r\n          animation-name: slideOutDown;\r\n}\r\n\r\n@-webkit-keyframes slideOutLeft {\r\n  from {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: hidden;\r\n    -webkit-transform: translate3d(-100%, 0, 0);\r\n            transform: translate3d(-100%, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes slideOutLeft {\r\n  from {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: hidden;\r\n    -webkit-transform: translate3d(-100%, 0, 0);\r\n            transform: translate3d(-100%, 0, 0);\r\n  }\r\n}\r\n\r\n.slideOutLeft {\r\n  -webkit-animation-name: slideOutLeft;\r\n          animation-name: slideOutLeft;\r\n}\r\n\r\n@-webkit-keyframes slideOutRight {\r\n  from {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: hidden;\r\n    -webkit-transform: translate3d(100%, 0, 0);\r\n            transform: translate3d(100%, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes slideOutRight {\r\n  from {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: hidden;\r\n    -webkit-transform: translate3d(100%, 0, 0);\r\n            transform: translate3d(100%, 0, 0);\r\n  }\r\n}\r\n\r\n.slideOutRight {\r\n  -webkit-animation-name: slideOutRight;\r\n          animation-name: slideOutRight;\r\n}\r\n\r\n@-webkit-keyframes slideOutUp {\r\n  from {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: hidden;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n            transform: translate3d(0, -100%, 0);\r\n  }\r\n}\r\n\r\n@keyframes slideOutUp {\r\n  from {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: hidden;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n            transform: translate3d(0, -100%, 0);\r\n  }\r\n}\r\n\r\n.slideOutUp {\r\n  -webkit-animation-name: slideOutUp;\r\n          animation-name: slideOutUp;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../css-animator/angular.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../css-animator/angular/animator.module.js"));
__export(__webpack_require__("../../../../css-animator/angular/animates.directive.js"));
__export(__webpack_require__("../../../../css-animator/angular/animation.service.js"));


/***/ }),

/***/ "../../../../css-animator/angular/animates.directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var animation_service_1 = __webpack_require__("../../../../css-animator/angular/animation.service.js");
var AnimatesDirective = (function () {
    function AnimatesDirective(_elementRef, animationService) {
        this._elementRef = _elementRef;
        this._animationBuilder = animationService.builder();
    }
    Object.defineProperty(AnimatesDirective.prototype, "animates", {
        set: function (options) {
            this._defaultOptions = options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnimatesDirective.prototype, "animatesOnInit", {
        set: function (options) {
            this._initOptions = options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnimatesDirective.prototype, "animatesInitMode", {
        set: function (mode) {
            if (typeof mode === 'string') {
                this._initMode = mode.toLowerCase();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnimatesDirective.prototype, "animationBuilder", {
        get: function () {
            return this._animationBuilder;
        },
        enumerable: true,
        configurable: true
    });
    AnimatesDirective.prototype.ngOnInit = function () {
        if (!this._initOptions) {
            return;
        }
        var promise;
        var builder = this._animationBuilder
            .setOptions(this._initOptions);
        switch (this._initMode) {
            case 'show':
                promise = builder.show(this._elementRef.nativeElement);
                break;
            case 'hide':
                promise = builder.hide(this._elementRef.nativeElement);
                break;
            default:
                promise = builder.animate(this._elementRef.nativeElement);
        }
        promise.then(function (element) { return element; }, function (error) {
            // Animation interrupted
        });
    };
    AnimatesDirective.prototype.start = function (options) {
        this._started = true;
        this.setOptions(options);
        return this._animationBuilder
            .animate(this._elementRef.nativeElement)
            .then(function (element) { return element; }, function (error) {
            // Animation interrupted
        });
    };
    AnimatesDirective.prototype.hide = function (options) {
        this.setOptions(options);
        return this._animationBuilder
            .setOptions(options)
            .hide(this._elementRef.nativeElement)
            .then(function (element) { return element; }, function (error) {
            // Animation interrupted
        });
    };
    AnimatesDirective.prototype.show = function (options) {
        this.setOptions(options);
        return this._animationBuilder
            .show(this._elementRef.nativeElement)
            .then(function (element) { return element; }, function (error) {
            // Animation interrupted
        });
    };
    AnimatesDirective.prototype.animate = function (options) {
        this.setOptions(options);
        return this._animationBuilder
            .setOptions(this._defaultOptions)
            .animate(this._elementRef.nativeElement)
            .then(function (element) { return element; }, function (error) {
            // Animation interrupted
        });
    };
    AnimatesDirective.prototype.pause = function () {
        if (!this._started)
            return;
        this._animationBuilder
            .setPlayState('paused')
            .applyPlayState(this._elementRef.nativeElement);
    };
    AnimatesDirective.prototype.resume = function () {
        if (!this._started)
            return;
        this._animationBuilder
            .setPlayState('running')
            .applyPlayState(this._elementRef.nativeElement);
    };
    AnimatesDirective.prototype.toggle = function () {
        if (!this._started)
            return;
        this._animationBuilder
            .setPlayState(this._animationBuilder.playState === 'running' ? 'paused' : 'running')
            .applyPlayState(this._elementRef.nativeElement);
    };
    AnimatesDirective.prototype.stop = function () {
        this._started = false;
        this._animationBuilder
            .stop(this._elementRef.nativeElement)
            .then(function (element) { return element; }, function (error) {
            // Animation interrupted
        });
    };
    AnimatesDirective.prototype.startOrStop = function (options) {
        if (!this._started) {
            this.start(options);
            return;
        }
        this.stop();
    };
    AnimatesDirective.prototype.setOptions = function (options) {
        if (options) {
            this._animationBuilder.setOptions(options);
            return;
        }
        this._animationBuilder.setOptions(this._defaultOptions);
    };
    AnimatesDirective = __decorate([
        core_1.Directive({
            selector: '[animates]',
            exportAs: 'animates',
            inputs: [
                'animates',
                'animatesOnInit',
                'animatesInitMode'
            ]
        }),
        __param(0, core_1.Inject(core_1.ElementRef)), __param(1, core_1.Inject(animation_service_1.AnimationService)),
        __metadata("design:paramtypes", [core_1.ElementRef, animation_service_1.AnimationService])
    ], AnimatesDirective);
    return AnimatesDirective;
}());
exports.AnimatesDirective = AnimatesDirective;


/***/ }),

/***/ "../../../../css-animator/angular/animation.service.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var builder_1 = __webpack_require__("../../../../css-animator/builder.js");
var AnimationService = (function () {
    function AnimationService() {
    }
    AnimationService.prototype.builder = function () {
        return new builder_1.AnimationBuilder();
    };
    AnimationService = __decorate([
        core_1.Injectable()
    ], AnimationService);
    return AnimationService;
}());
exports.AnimationService = AnimationService;


/***/ }),

/***/ "../../../../css-animator/angular/animator.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var animates_directive_1 = __webpack_require__("../../../../css-animator/angular/animates.directive.js");
var animation_service_1 = __webpack_require__("../../../../css-animator/angular/animation.service.js");
var AnimatorModule = (function () {
    function AnimatorModule() {
    }
    AnimatorModule = __decorate([
        core_1.NgModule({
            declarations: [
                animates_directive_1.AnimatesDirective
            ],
            exports: [
                animates_directive_1.AnimatesDirective
            ],
            providers: [
                animation_service_1.AnimationService
            ]
        })
    ], AnimatorModule);
    return AnimatorModule;
}());
exports.AnimatorModule = AnimatorModule;


/***/ }),

/***/ "../../../../css-animator/builder.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../css-animator/builder/animation_builder.js"));


/***/ }),

/***/ "../../../../css-animator/builder/animation_builder.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AnimationMode;
(function (AnimationMode) {
    AnimationMode[AnimationMode["Animate"] = 0] = "Animate";
    AnimationMode[AnimationMode["Show"] = 1] = "Show";
    AnimationMode[AnimationMode["Hide"] = 2] = "Hide";
})(AnimationMode = exports.AnimationMode || (exports.AnimationMode = {}));
;
var AnimationBuilder = (function () {
    // Public Methods
    function AnimationBuilder() {
        this.animationOptions = Object.assign({}, AnimationBuilder.defaults);
        this.defaultOptions = Object.assign({}, this.animationOptions);
        this.classes = [];
        this.activeClasses = new Map();
        this.listeners = new Map();
        this.timeouts = new Map();
        this.styles = new Map();
        this.log('AnimationBuilder created.');
    }
    AnimationBuilder.prototype.show = function (element) {
        return this.animate(element, AnimationMode.Show);
    };
    AnimationBuilder.prototype.hide = function (element) {
        return this.animate(element, AnimationMode.Hide);
    };
    AnimationBuilder.prototype.stop = function (element, reset) {
        if (reset === void 0) { reset = true; }
        this.removeTimeouts(element);
        this.removeListeners(element);
        if (reset)
            this.reset(element, false);
        return Promise.resolve(element);
    };
    AnimationBuilder.prototype.animate = function (element, mode) {
        var _this = this;
        if (mode === void 0) { mode = AnimationMode.Animate; }
        if (mode === AnimationMode.Show) {
            this.hideElement(element);
        }
        return new Promise(function (resolve, reject) {
            _this.removeTimeouts(element);
            var delay = setTimeout(function () {
                _this.reset(element, true, false, true);
                _this.registerAnimationListeners(element, mode, resolve, reject);
                _this.saveStyle(element);
                _this.saveClasses(element, mode);
                _this.pinElement(element, mode);
                _this.nextFrame(function () {
                    _this.showElement(element, mode);
                    _this.applyProperties(element, mode);
                });
            }, _this.animationOptions.delay);
            _this.addTimeout(element, delay, reject);
            _this.log("Timeout " + delay + " registered for element", element);
        });
    };
    AnimationBuilder.prototype.reset = function (element, removePending, rejectTimeouts, rejectListeners) {
        if (removePending === void 0) { removePending = true; }
        if (rejectTimeouts === void 0) { rejectTimeouts = false; }
        if (rejectListeners === void 0) { rejectListeners = false; }
        if (removePending) {
            this.removeTimeouts(element, rejectTimeouts);
            this.removeListeners(element, rejectListeners);
        }
        this.removeStyles(element);
        this.removeClasses(element);
    };
    AnimationBuilder.prototype.dispose = function () {
        this.timeouts.forEach(function (refs) {
            for (var _i = 0, refs_1 = refs; _i < refs_1.length; _i++) {
                var t = refs_1[_i];
                clearTimeout(t.timeout);
            }
        });
        this.listeners.forEach(function (refs, el) {
            for (var _i = 0, refs_2 = refs; _i < refs_2.length; _i++) {
                var l = refs_2[_i];
                el.removeEventListener(l.eventName, l.handler);
            }
        });
        this.classes = [];
        this.styles = new Map();
        this.timeouts = new Map();
        this.listeners = new Map();
    };
    AnimationBuilder.prototype.addAnimationClass = function (name) {
        if (this.classes.indexOf(name) === -1) {
            this.classes.push(name);
        }
        return this;
    };
    AnimationBuilder.prototype.removeAnimationClass = function (name) {
        var index = this.classes.indexOf(name);
        if (index !== -1) {
            this.classes.splice(index, 1);
        }
        return this;
    };
    // Private Methods
    AnimationBuilder.prototype.log = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        if (AnimationBuilder.DEBUG) {
            console.log.apply(console, ['css-animator:'].concat(values));
        }
    };
    AnimationBuilder.prototype.nextFrame = function (fn) {
        AnimationBuilder.raf(function () {
            AnimationBuilder.raf(fn);
        });
    };
    AnimationBuilder.prototype.camelCase = function (input) {
        return input.toLowerCase().replace(/-(.)/g, function (match, group) {
            return group.toUpperCase();
        });
    };
    AnimationBuilder.prototype.hideElement = function (element, mode) {
        if (this.animationOptions.useVisibility) {
            element.style.visibility = 'hidden';
            return;
        }
        element.setAttribute('hidden', '');
    };
    AnimationBuilder.prototype.showElement = function (element, mode) {
        if (this.animationOptions.pin && mode === AnimationMode.Show) {
            element.style.visibility = 'visible';
        }
        if (this.animationOptions.useVisibility) {
            element.style.visibility = 'visible';
            return;
        }
        element.removeAttribute('hidden');
    };
    AnimationBuilder.prototype.pinElement = function (element, mode) {
        if (!this.animationOptions.pin)
            return;
        if (mode === AnimationMode.Show) {
            element.style.visibility = 'hidden';
        }
        if (!this.animationOptions.useVisibility) {
            this.showElement(element);
        }
        var position = this.getPosition(element);
        element.style.position = this.animationOptions.fixed ? 'fixed' : 'absolute';
        element.style.top = position.top + "px";
        element.style.left = position.left + "px";
        element.style.width = position.width + "px";
        element.style.height = position.height + "px";
        element.style.margin = '0px';
    };
    AnimationBuilder.prototype.getPosition = function (element) {
        var rect = element.getBoundingClientRect();
        var cs = window.getComputedStyle(element);
        var left = element.offsetLeft;
        var top = element.offsetTop;
        var width = rect.width -
            parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight) -
            parseFloat(cs.borderLeftWidth) - parseFloat(cs.borderRightWidth);
        var height = rect.height -
            parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom) -
            parseFloat(cs.borderTopWidth) - parseFloat(cs.borderBottomWidth);
        if (this.animationOptions.fixed) {
            left = rect.left + window.scrollX;
            top = rect.top + window.scrollY;
        }
        return { left: left, top: top, width: width, height: height };
    };
    AnimationBuilder.prototype.registerAnimationListeners = function (element, mode, resolve, reject) {
        var _this = this;
        var animationStartEvent = this.animationStartEvent(element);
        var animationEndEvent = this.animationEndEvent(element);
        var startHandler;
        element.addEventListener(animationStartEvent, startHandler = function () {
            _this.log("Animation start handler fired for element", element);
            element.removeEventListener(animationStartEvent, startHandler);
            return startHandler;
        });
        this.log("Registered animation start listener for element", element);
        var endHandler;
        element.addEventListener(animationEndEvent, endHandler = function () {
            _this.log("Animation end handler fired for element", element);
            element.removeEventListener(animationEndEvent, endHandler);
            _this.removeListeners(element, false);
            _this.reset(element, true, false, false);
            if (mode === AnimationMode.Hide)
                _this.hideElement(element);
            if (mode === AnimationMode.Show)
                _this.showElement(element);
            resolve(element);
            return endHandler;
        });
        this.log("Registered animation end listener for element", element);
        this.addListener(element, animationStartEvent, startHandler);
        this.addListener(element, animationEndEvent, endHandler, reject);
    };
    AnimationBuilder.prototype.addTimeout = function (element, timeout, reject) {
        if (!this.timeouts.has(element)) {
            this.timeouts.set(element, []);
        }
        this.timeouts.get(element).push({
            timeout: timeout,
            reject: reject,
        });
    };
    AnimationBuilder.prototype.addListener = function (element, eventName, handler, reject) {
        if (!this.listeners.has(element)) {
            this.listeners.set(element, []);
        }
        var classes = Object.assign({}, this.classes);
        this.listeners.get(element).push({
            eventName: eventName,
            handler: handler,
            reject: reject,
            classes: classes,
        });
    };
    AnimationBuilder.prototype.removeListeners = function (element, reject) {
        var _this = this;
        if (reject === void 0) { reject = false; }
        if (!this.listeners.has(element))
            return;
        this.listeners.get(element)
            .forEach(function (ref) {
            element.removeEventListener(ref.eventName, ref.handler);
            _this.log("Listener " + ref.eventName + " removed for element", element);
            if (reject && _this.animationOptions.reject && ref.reject)
                ref.reject('animation_aborted');
        });
        this.listeners.delete(element);
    };
    AnimationBuilder.prototype.removeTimeouts = function (element, reject) {
        var _this = this;
        if (reject === void 0) { reject = false; }
        if (!this.timeouts.has(element))
            return;
        this.timeouts.get(element)
            .forEach(function (ref) {
            clearTimeout(ref.timeout);
            _this.log("Timeout " + ref.timeout + " removed for element", element);
            if (reject && _this.animationOptions.reject && ref.reject)
                ref.reject('animation_aborted');
        });
        this.timeouts.delete(element);
    };
    AnimationBuilder.prototype.animationEndEvent = function (element) {
        var el = document.createElement('endAnimationElement');
        var animations = {
            animation: 'animationend',
            OAnimation: 'oAnimationEnd',
            MozAnimation: 'animationend',
            WebkitAnimation: 'webkitAnimationEnd',
        };
        for (var animation in animations) {
            if (el.style[animation] !== undefined) {
                return animations[animation];
            }
        }
        return null;
    };
    AnimationBuilder.prototype.animationStartEvent = function (element) {
        var el = document.createElement('startAnimationElement');
        var animations = {
            animation: 'animationstart',
            OAnimation: 'oAnimationStart',
            MozAnimation: 'animationstart',
            WebkitAnimation: 'webkitAnimationStart',
        };
        for (var animation in animations) {
            if (el.style[animation] !== undefined) {
                return animations[animation];
            }
        }
        return null;
    };
    AnimationBuilder.prototype.applyProperties = function (element, mode) {
        this.applyClasses(element, mode);
        this.applyStyles(element, mode);
    };
    AnimationBuilder.prototype.saveStyle = function (element) {
        this.styles.set(element, Object.assign({}, element.style));
    };
    AnimationBuilder.prototype.applyStyles = function (element, mode) {
        this.applyFillMode(element);
        this.applyTimingFunction(element);
        this.applyPlayState(element);
        this.applyDirection(element);
        this.applyDuration(element);
        this.applyIterationCount(element);
    };
    AnimationBuilder.prototype.removeStyles = function (element) {
        if (!this.styles.has(element))
            return;
        var styles = this.styles.get(element);
        element.removeAttribute('style');
        for (var style in styles) {
            if (styles.hasOwnProperty(style)) {
                element.style[style] = styles[style];
            }
        }
        this.styles.delete(element);
    };
    AnimationBuilder.prototype.saveClasses = function (element, mode) {
        var classes = this.classes.slice(0);
        switch (mode) {
            case AnimationMode.Show:
                classes.push('animated-show');
                break;
            case AnimationMode.Hide:
                classes.push('animated-hide');
                break;
        }
        classes.push('animated', this.animationOptions.type);
        this.activeClasses.set(element, classes);
    };
    AnimationBuilder.prototype.applyClasses = function (element, mode) {
        var active = this.activeClasses.get(element) || [];
        (_a = element.classList).add.apply(_a, ['animated'].concat(active));
        var _a;
    };
    AnimationBuilder.prototype.removeClasses = function (element) {
        var active = this.activeClasses.get(element) || [];
        (_a = element.classList).remove.apply(_a, ['animated',
            'animated-show',
            'animated-hide'].concat(active));
        this.activeClasses.delete(element);
        var _a;
    };
    AnimationBuilder.prototype.applyStyle = function (element, prop, value) {
        var el = document.createElement('checkStyle');
        var styles = {
            standard: this.camelCase(prop),
            webkit: this.camelCase("-webkit-" + prop),
            mozilla: this.camelCase("-moz-" + prop),
            opera: this.camelCase("-o-" + prop),
            explorer: this.camelCase("-ie-" + prop),
        };
        for (var style in styles) {
            if (!styles.hasOwnProperty(style))
                continue;
            if (el.style[styles[style]] !== undefined) {
                element.style[styles[style]] = value === undefined || value === null ? null : value;
                break;
            }
        }
        return this;
    };
    Object.defineProperty(AnimationBuilder.prototype, "defaults", {
        // Getters and Setters
        get: function () {
            return this.defaultOptions;
        },
        set: function (defaults) {
            this.defaultOptions = defaults;
        },
        enumerable: true,
        configurable: true
    });
    AnimationBuilder.prototype.setDefaults = function (defaults) {
        this.defaults = defaults;
        return this;
    };
    Object.defineProperty(AnimationBuilder.prototype, "options", {
        get: function () {
            return this.animationOptions;
        },
        set: function (options) {
            this.animationOptions = options;
        },
        enumerable: true,
        configurable: true
    });
    AnimationBuilder.prototype.setOptions = function (options) {
        Object.assign(this.options, options);
        return this;
    };
    Object.defineProperty(AnimationBuilder.prototype, "reject", {
        get: function () {
            return this.animationOptions.reject;
        },
        set: function (reject) {
            this.animationOptions.reject = reject;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnimationBuilder.prototype, "pin", {
        get: function () {
            return this.animationOptions.pin;
        },
        set: function (pin) {
            this.animationOptions.pin = pin;
        },
        enumerable: true,
        configurable: true
    });
    AnimationBuilder.prototype.setPin = function (pin) {
        this.pin = pin;
        return this;
    };
    Object.defineProperty(AnimationBuilder.prototype, "useVisibility", {
        get: function () {
            return this.animationOptions.useVisibility;
        },
        set: function (useVisibility) {
            this.animationOptions.useVisibility = useVisibility;
        },
        enumerable: true,
        configurable: true
    });
    AnimationBuilder.prototype.setUseVisibility = function (useVisibility) {
        this.useVisibility = useVisibility;
        return this;
    };
    Object.defineProperty(AnimationBuilder.prototype, "type", {
        get: function () {
            return this.animationOptions.type;
        },
        set: function (type) {
            this.animationOptions.type = type;
        },
        enumerable: true,
        configurable: true
    });
    AnimationBuilder.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    Object.defineProperty(AnimationBuilder.prototype, "fillMode", {
        get: function () {
            return this.animationOptions.fillMode;
        },
        set: function (fillMode) {
            this.animationOptions.fillMode = fillMode;
        },
        enumerable: true,
        configurable: true
    });
    AnimationBuilder.prototype.setFillMode = function (fillMode) {
        this.fillMode = fillMode;
        return this;
    };
    AnimationBuilder.prototype.applyFillMode = function (element, fillMode) {
        this.applyStyle(element, 'animation-fill-mode', fillMode || this.animationOptions.fillMode);
        return this;
    };
    Object.defineProperty(AnimationBuilder.prototype, "timingFunction", {
        get: function () {
            return this.animationOptions.timingFunction;
        },
        set: function (timingFunction) {
            this.animationOptions.timingFunction = timingFunction;
        },
        enumerable: true,
        configurable: true
    });
    AnimationBuilder.prototype.setTimingFunction = function (timingFunction) {
        this.timingFunction = timingFunction;
        return this;
    };
    AnimationBuilder.prototype.applyTimingFunction = function (element, timingFunction) {
        this.applyStyle(element, 'animation-timing-function', timingFunction || this.animationOptions.timingFunction);
        return this;
    };
    Object.defineProperty(AnimationBuilder.prototype, "playState", {
        get: function () {
            return this.animationOptions.playState;
        },
        set: function (playState) {
            this.animationOptions.playState = playState;
        },
        enumerable: true,
        configurable: true
    });
    AnimationBuilder.prototype.setPlayState = function (playState) {
        this.playState = playState;
        return this;
    };
    AnimationBuilder.prototype.applyPlayState = function (element, playState) {
        this.applyStyle(element, 'animation-play-state', playState || this.animationOptions.playState);
        return this;
    };
    Object.defineProperty(AnimationBuilder.prototype, "direction", {
        get: function () {
            return this.animationOptions.direction;
        },
        set: function (direction) {
            this.animationOptions.direction = direction;
        },
        enumerable: true,
        configurable: true
    });
    AnimationBuilder.prototype.setDirection = function (direction) {
        this.direction = direction;
        return this;
    };
    AnimationBuilder.prototype.applyDirection = function (element, direction) {
        this.applyStyle(element, 'animation-direction', direction || this.animationOptions.direction);
        return this;
    };
    Object.defineProperty(AnimationBuilder.prototype, "duration", {
        get: function () {
            return this.animationOptions.duration;
        },
        set: function (duration) {
            this.animationOptions.duration = duration;
        },
        enumerable: true,
        configurable: true
    });
    AnimationBuilder.prototype.setDuration = function (duration) {
        this.duration = duration;
        return this;
    };
    AnimationBuilder.prototype.applyDuration = function (element, duration) {
        this.applyStyle(element, 'animation-duration', (duration || this.animationOptions.duration) + "ms");
        return this;
    };
    Object.defineProperty(AnimationBuilder.prototype, "delay", {
        get: function () {
            return this.animationOptions.delay;
        },
        set: function (delay) {
            this.animationOptions.delay = delay;
        },
        enumerable: true,
        configurable: true
    });
    AnimationBuilder.prototype.setDelay = function (delay) {
        this.delay = delay;
        return this;
    };
    AnimationBuilder.prototype.applyDelayAsStyle = function (element, delay) {
        this.applyStyle(element, 'animation-delay', (delay || this.animationOptions.delay) + "ms");
        return this;
    };
    Object.defineProperty(AnimationBuilder.prototype, "iterationCount", {
        get: function () {
            return this.animationOptions.iterationCount;
        },
        set: function (iterationCount) {
            this.animationOptions.iterationCount = iterationCount;
        },
        enumerable: true,
        configurable: true
    });
    AnimationBuilder.prototype.setIterationCount = function (iterationCount) {
        this.iterationCount = iterationCount;
        return this;
    };
    AnimationBuilder.prototype.applyIterationCount = function (element, iterationCount) {
        this.applyStyle(element, 'animation-iteration-count', iterationCount || this.animationOptions.iterationCount);
        return this;
    };
    AnimationBuilder.DEBUG = false;
    AnimationBuilder.defaults = {
        fixed: false,
        reject: true,
        useVisibility: false,
        pin: true,
        type: 'bounce',
        fillMode: 'none',
        timingFunction: 'ease',
        playState: 'running',
        direction: 'normal',
        duration: 1000,
        delay: 0,
        iterationCount: 1,
    };
    AnimationBuilder.raf = window.requestAnimationFrame
        ? window.requestAnimationFrame.bind(window)
        : setTimeout;
    return AnimationBuilder;
}());
exports.AnimationBuilder = AnimationBuilder;


/***/ }),

/***/ "../../../../css-animator/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../css-animator/builder.js"));
__export(__webpack_require__("../../../../css-animator/angular.js"));


/***/ })

});
//# sourceMappingURL=animations.module.chunk.js.map