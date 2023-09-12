<script setup>
    // component props
    const props = defineProps({
        name: String,
        id: Number,
        message: String
    })
</script>

<template> 
    <div>
        <br>
        Name: {{ name }}
        <br>
        Message: {{ message }}
        <br>
        Id: {{ id }}
        <br>

        <!-- component event ($emit) -->
        <button @click="$emit('increase-size')">Increase Font</button>

        <button>Button without SLOT</button>
        <!-- creating slot button -->
        <button><slot></slot></button>

        <!-- Named SLOT value -->
        <footer>
            <slot name="footer">
            </slot>
        </footer>
    </div>
</template>

<style scoped>

</style>