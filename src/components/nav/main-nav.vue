<template>
    <nav>
        <slot></slot>
    </nav>
</template>

<script>
export default {
    props: {
        icon: String, 
        title: String,
        active: Boolean
    },
    computed: {
        computedIcon() {
            return this.icon ? `fa-${this.icon}` : null;
        }
    }
};
</script>