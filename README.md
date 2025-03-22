✅ ขั้นตอนการติดตั้ง Node Modules
ไปที่โฟลเดอร์โปรเจกต์ของคุณ:

bash
Copy
Edit
cd D:/PersonalWeb
รันคำสั่งเพื่อติดตั้ง Dependencies ทั้งหมด:

bash
Copy
Edit
npm install
คำสั่งนี้จะอ่านข้อมูลจากไฟล์ package.json และติดตั้งแพ็กเกจทั้งหมดที่กำหนดไว้

💡 ตรวจสอบว่าโฟลเดอร์ node_modules/ ถูกสร้างหรือไม่
หลังจากรัน npm install แล้ว ตรวจสอบโฟลเดอร์:

bash
Copy
Edit
ls node_modules
หรือบน Windows:

bash
Copy
Edit
dir node_modules
คุณควรเห็นโฟลเดอร์ของแพ็กเกจต่าง ๆ ที่ติดตั้ง

📝 กรณีมีปัญหาการติดตั้ง (เช่น npm ERR!)
ถ้าเจอปัญหา ลองแก้ไขตามนี้:

ลบโฟลเดอร์ node_modules/ เดิม (ถ้ามี)

bash
Copy
Edit
rm -rf node_modules
หรือบน Windows:

bash
Copy
Edit
rmdir /S /Q node_modules
ลบไฟล์ package-lock.json

bash
Copy
Edit
rm package-lock.json
หรือบน Windows:

bash
Copy
Edit
del package-lock.json
ติดตั้งใหม่

bash
Copy
Edit
npm install
🚀 วิธีรันเซิร์ฟเวอร์หลังติดตั้งเสร็จ
หลังจากติดตั้งเสร็จแล้ว ลองรันเซิร์ฟเวอร์:

bash
Copy
Edit
npm start
หรือถ้าใช้ nodemon:

bash
Copy
Edit
npm run dev
🎉 สรุป
ดึงโค้ดจาก GitHub ด้วยคำสั่ง git pull

ติดตั้ง Node Modules ด้วยคำสั่ง npm install

ตรวจสอบโฟลเดอร์ node_modules/ ว่าถูกสร้างหรือไม่

รันเซิร์ฟเวอร์ด้วย npm start หรือ npm run dev

