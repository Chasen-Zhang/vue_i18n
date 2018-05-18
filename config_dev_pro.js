const env_my ={
  base:''
};
if (process.env.NODE_ENV === 'production') {
  env_my.base = 'address'
}
export default env_my;
