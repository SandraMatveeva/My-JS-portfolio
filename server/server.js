import express from 'express';
import cors from 'cors';
import fs from 'fs';
import nodemailer from 'nodemailer';

const app = express();
const PORT = 3001; // інший порт, щоб не конфліктував із Vite (який працює на 5173)

app.use(cors());
app.use(express.json());

// Отримуємо форму
app.post('/send', async (req, res) => {
  const { email, comments } = req.body;

  console.log('📨 Отримано дані:', email, comments);

  // 1️⃣ Зберігаємо у файл
  const logLine = `${new Date().toLocaleString()} | ${email} | ${comments}\n`;
  fs.appendFileSync('messages.txt', logLine); //всі повідомлення зберігаються у файл messages.txt

  // 2️⃣ Відправляємо email (опціонально)
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'sandram0608@gmail.com',
        pass: 'hvpb kymt bkjb hyxg', // не звичайний пароль!
      },
    });

    await transporter.sendMail({
      from: 'sandram0608@gmail.com',
      to: 'sandram0608@gmail.com',
      subject: 'Нове повідомлення з сайту',
      text: `Email: ${email}\nКоментар: ${comments}`,
    });

    console.log('✅ Дані отримано. (Тестовий режим, без відправки листа');
    res.json({ success: true });
  } catch (err) {
    console.error('Помилка при надсиланні:', err);
    res.status(500).json({ success: false });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Сервер працює на http://localhost:${PORT}`);
});
