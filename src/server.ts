type Handle = () => Promise<string>;
const fullName = 'An Hung Cao';

const handle = (hello: string) => Promise.resolve(hello);

handle('hello').then(console.log);
