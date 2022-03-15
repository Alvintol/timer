const args = process.argv.slice(2);
args.forEach(arg => {
  if (arg && arg > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, 1000 * arg);
  }
});
