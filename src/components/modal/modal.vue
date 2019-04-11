<template>
    <transition name="fade">
        <div class="modal" v-if="visible">
            <div class="modal__backdrop" @click="onCancelButtonClickHandler"></div>
            <div class="modal__wrapper">
                <div class="modal__header" v-if="title">{{title}}</div>
                <div class="modal__content">
                    <slot></slot>
                </div>
                <div class="modal__footer" v-if="onOk">
                    <button class="btn" @click="onOkButtonClickHandler">{{ ok }}</button>
                    <button class="btn" @click="onCancelButtonClickHandler">{{ cancel }}</button>
                </div>
                <i class="modal__close fas fa-times-circle" @click="onCancelButtonClickHandler"></i>
            </div>
            
            
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        onOk: {
            type: Function,
            default: null
        },
        title: {
            type: String,
            default: ''
        },
        ok: {
            type: String,
            default: 'OK'
        },
        cancel: {
            type: String,
            default: 'Close'
        },
        
    },
    data() {
        return {
            visible: false
        }
    },
    methods: {
        show() {
            this.visible = true;
        },
        hide() {
            this.visible = false;
        },
        onOkButtonClickHandler() {
            this.hide();
            if (this.onOk) {
                this.onOk();
            }
        },
        onCancelButtonClickHandler() {
            this.hide();
        }
    }
};
</script>
