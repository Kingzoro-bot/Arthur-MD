const fuck = async (m, sock) => {
  const prefix = /^[\\/!#.]/gi.test(m.body) ? m.body.match(/^[\\/!#.]/gi)[0] : '/';
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).toLowerCase() : '';

  if (cmd === "fuck") {
    const start = new Date().getTime();
    await m.React('🍆');
    const end = new Date().getTime();
    const responseTime = (end - start) / 1000;

    const text = `*_🥵⃝ƒυϲκє∂ ƒοя: ${responseTime.toFixed(2)} s_*`;
    sock.sendMessage(m.from, { text }, { quoted: m });
  }
}

export default fuck;
