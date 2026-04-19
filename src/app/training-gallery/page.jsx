import Image from "next/image";

const images = [
  "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/WhatsApp-Image-2024-06-21-at-12.19.19-PM-225x300.jpeg.webp",
  "/https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/WhatsApp-Image-2024-06-21-at-12.19.18-PM-7-225x300.jpeg.webp",
  "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/WhatsApp-Image-2024-06-21-at-12.19.19-PM-225x300.jpeg.webp",
  "/https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/WhatsApp-Image-2024-06-21-at-12.19.18-PM-7-225x300.jpeg.webp",
  "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/WhatsApp-Image-2024-06-21-at-12.19.19-PM-225x300.jpeg.webp",
  "/https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/WhatsApp-Image-2024-06-21-at-12.19.18-PM-7-225x300.jpeg.webp",
  "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/WhatsApp-Image-2024-06-21-at-12.19.19-PM-225x300.jpeg.webp",
  "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/WhatsApp-Image-2024-06-21-at-12.19.18-PM-7-225x300.jpeg.webp",
  "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/WhatsApp-Image-2024-06-21-at-12.19.19-PM-225x300.jpeg.webp",
  "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/WhatsApp-Image-2024-06-21-at-1２.１９.１９-PM-２２５ｘ３００.jpeg.webp",
  "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/２０２４/０６/WhatsApp-Image-２０２４-０６-２１-at-１２.１９.１９-PM-２２５ｘ３００.jpeg.webp",
];

export default function TrainingGallery() {
  return (
    <section className="py-12 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Training Gallery
        </h1>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <Image
                src={src}
                alt={`gallery-${index}`}
                width={400}
                height={300}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}