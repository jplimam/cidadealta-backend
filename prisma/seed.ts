import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const emblems = [
    {
      slug: 'cda',
      name: 'Cidade Alta',
      image: 'https://cidadealtarp.com/imagens/challenge/cidade-alta.png',
    },
    {
      slug: 'cda-valley',
      name: 'Cidade Alta Valley',
      image:
        'https://cidadealtarp.com/imagens/challenge/cidade-alta-valley.png',
    },
    {
      slug: 'policia',
      name: 'Policia do Cidade Alta',
      image: 'https://cidadealtarp.com/imagens/challenge/policia.png',
    },
    {
      slug: 'hospital',
      name: 'Hospital do Cidade Alta',
      image: 'https://cidadealtarp.com/imagens/challenge/hospital.png',
    },
    {
      slug: 'mecanica',
      name: 'Mecânica do Cidade Alta',
      image: 'https://cidadealtarp.com/imagens/challenge/mecanica.png',
    },
    {
      slug: 'taxi',
      name: 'Taxi do Cidade Alta',
      image: 'https://cidadealtarp.com/imagens/challenge/taxi.png',
    },
    {
      slug: 'curuja',
      name: 'Coruja',
      image: 'https://cidadealtarp.com/imagens/challenge/coruja.png',
    },
    {
      slug: 'hiena',
      name: 'Hiena',
      image: 'https://cidadealtarp.com/imagens/challenge/hiena.png',
    },
    {
      slug: 'gato',
      name: 'Gato',
      image: 'https://cidadealtarp.com/imagens/challenge/gato.png',
    },
    {
      slug: 'urso',
      name: 'Urso',
      image: 'https://cidadealtarp.com/imagens/challenge/urso.png',
    },
  ];

  for (const emblem of emblems) {
    await prisma.emblems.create({
      data: emblem,
    });
  }
  console.log('Banco de dados populado com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
