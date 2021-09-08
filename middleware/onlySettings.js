// export default function ({ store, redirect }) {
export default function ({ redirect }) {
  // If the user is not authenticated
  // if (!store.state.authenticated) {
  if (this.$route.path === '/') {
    return redirect('/settings')
  }
}
