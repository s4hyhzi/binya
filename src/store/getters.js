const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  userName:state=>state.user.userName,
  tenId:state=>state.user.tenId
}
export default getters
