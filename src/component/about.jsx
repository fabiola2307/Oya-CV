// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { database, ref, onValue } from '../config/firebase';

const About = () => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const imageRef = ref(database, 'Header/image'); // Path to the image in your Realtime Database
    onValue(imageRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setImageSrc(data);
      }
    });
  }, []);

  return (
    <div>
      {/* ======= About Section ======= */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
            <p>
              Saya merupakan seorang mahasiswa, dan saat ini sedang mengambil
              jurusan Sistem informatika di Fakultas Ilmu Komputer Universitas Klabat.
              Saya memilih jurusan Sistem Informasi karena memberikan kombinasi unik
              antara pemahaman teknologi dan aplikasi bisnis. Hal ini memungkinkan saya
              untuk mengerti bagaimana teknologi dapat diterapkan untuk memecahkan masalah
              bisnis yang kompleks
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img
                src={imageSrc}
                className="img-fluid"
                alt="Profile"
              />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>System Analyst</h3>
              <p className="fst-italic">
                Saya adalah seorang System Analyst yang berkomitmen tinggi terhadap:
                <br/>
                - Kualitas Analisis: Melakukan analisis sistem secara teliti dan sesuai standar.
                <br/>
                - Belajar Berkelanjutan: Terus mengikuti perkembangan teknologi dalam analisis sistem.
                <br/>
                - Responsif terhadap Perubahan: Cepat merespons perubahan kebutuhan sistem.
                <br/>
                - Pengalaman Pengguna: Fokus pada pengalaman pengguna yang optimal dalam pengembangan sistem.
                <br/>
                - Kerja Tim Efektif: Kolaborasi dengan anggota tim untuk mencapai tujuan proyek.
                <br/>
                - Pemecahan Masalah Kreatif: Mengatasi tantangan analisis sistem dengan pendekatan kreatif.
                <br/>
                - Pentingnya Pengujian: Melakukan pengujian sistem secara menyeluruh untuk memastikan kualitas.
                <br/>
                - Pemeliharaan Berkelanjutan: Memelihara dan meningkatkan sistem secara teratur untuk menjaga performa.
                <br/>
                - Kesadaran Keamanan: Implementasi praktik keamanan dalam analisis dan pengembangan sistem.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Born:</strong> <span>23 july 2005</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Website:</strong> <span>.....................</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Phon Number:</strong>{" "}
                      <span>0852*8***3*5</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>City:</strong> <span>Manado, Indonesia</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Age:</strong> <span>19</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Sarjana:</strong>{" "}
                      <span>Sarjana Komputer (S1)</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Email:</strong> <span>s2221****student@unklab.ac.id</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Freelance:</strong> <span>Tidak Tersedia</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                {/* bisa di berikan Text tambahan */}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}
    </div>
  );
};

export default About;
