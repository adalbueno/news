<template>
    <router-link class="nav__item" :to="link">
        <i class="nav__icon fas" :class="computedIcon" v-if="computedIcon"></i>
        <span class="nav__text">{{title}}</span>
    </router-link>
</template>

<script>
export default {
    props: {
        icon: String, 
        title: String,
        active: Boolean,
        link: String
    },
    computed: {
        computedIcon() {
            return this.icon ? `fa-${this.icon}` : null;
        }
    }
};
</script>