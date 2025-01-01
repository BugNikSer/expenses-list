interface IEnvironment {
  port: number;
}

export default (): IEnvironment => ({
  port: Number(process.env.PORT),
});
