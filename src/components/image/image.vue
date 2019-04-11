<template>
    <div class="image" :style="style"></div>
</template>

<script>
export default {
    props: {
        src: String,
        height: Number
    },
    computed: {
        style() {
            var styles = [];

            if (this.src) {
                styles.push(`background-image: url(${this.src})`);
            }

            return styles.join(';');
        }
    }
};
</script>

<style>
.image {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>
