"use strict";
var KTSigninGeneral = function () {
    var t, e, i, d;
    return {
        init: function () {
            t = document.querySelector("#kt_sign_in_form"), 
            e = document.querySelector("#kt_sign_in_submit"),
            i = FormValidation.formValidation(t, {
                fields: {
                    email: {
                        validators: {
                            notEmpty: {
                                message: "Укажите адрес электронной почты."
                            },
                            emailAddress: {
                                message: "Значение не является действительным адресом электронной почты."
                            }
                        }
                    },
                    password: {
                        validators: {
                            notEmpty: {
                                message: "Требуется пароль"
                            }
                        }
                    }
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger,
                    bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: ".fv-row"
                    })
                }
            }), 
            e.addEventListener("click", (function (n) {
                n.preventDefault(), 
                i.validate().then((function (i) {
                    "Valid" == i ? (e.setAttribute("data-kt-indicator", "on"), 
                    e.disabled = !0, 
                    setTimeout((function () {
                        e.removeAttribute("data-kt-indicator"), 
                        e.disabled = !1,
                        
                        $.post(t.action, $( t ).serialize(), function (data) {
                            var d = data.data;
                            localStorage.setItem("email", d.email);
                            localStorage.setItem("full_name", d.full_name);
                            localStorage.setItem("organization", d.organization);
                            t.querySelector('[name="email"]').value = "", t.querySelector('[name="password"]').value = "";
                            var i = t.getAttribute("data-kt-redirect-url");
                            i && (location.href = i)
                        })
                        .fail(function () {
                            Swal.fire({
                                text: "Электронная почта или пароль не правильный!",
                                icon: "error",
                                buttonsStyling: !1,
                                confirmButtonText: "Попробовать еще раз!",
                                customClass: {
                                    confirmButton: "btn btn-primary"
                                }
                            })
                        })
                    }), 0)) : Swal.fire({
                        text: "Электронная почта или пароль не правильный!",
                        icon: "error",
                        buttonsStyling: !1,
                        confirmButtonText: "Попробовать еще раз!",
                        customClass: {
                            confirmButton: "btn btn-primary"
                        }
                    })
                }))
            }))
        }
    }
}();
KTUtil.onDOMContentLoaded((function () {
    KTSigninGeneral.init()
}));