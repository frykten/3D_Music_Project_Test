<template lang="html">
  <footer class="page-footer">
    <p>&copy Smurf</p>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
	.page-footer {
		position: fixed;
		bottom: 0;
		width: 100vw;
		height: 3vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgb(84, 84, 84);
		box-shadow: 10px -10px 10px rgba(0,0,0,0.4), 10px -10px 16px rgba(0,0,0,0.4);
	}
</style>
