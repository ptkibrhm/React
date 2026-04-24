import { useState, useEffect } from "react";

const Example = () => {
  const [vize1, setVize1] = useState("");
  const [vize2, setVize2] = useState("");
  const [ortalama, setOrtalama] = useState("");

  useEffect(() => {
    if (vize1 && vize2) {
      const n1 = Number(vize1);
      const n2 = Number(vize2);

      // kontrol
      if (n1 > 100 || n2 > 100 || n1 < 0 || n2 < 0) { //100 ve 0 arasına kontrol eklendi
        setOrtalama("Hatalı giriş");
        return;
      }

      const sonuc = (n1 + n2) / 2;
      setOrtalama(sonuc);
    } else {
      setOrtalama("");
    }
  }, [vize1, vize2]);

  return (
    <div>
      <input
        type="number"
        placeholder="Vize 1"
        value={vize1}
        onChange={(e) => setVize1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Vize 2"
        value={vize2}
        onChange={(e) => setVize2(e.target.value)}
      />

      <p>
        Ortalama: {ortalama}
        {typeof ortalama === "number" &&        //eğer koşul doğruysa sonucu göster
          (ortalama >= 50 ? " ✅ Geçti" : " ❌ Kaldı")}
      </p>
    </div>
  );
};

export default Example;
