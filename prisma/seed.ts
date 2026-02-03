import { PrismaClient, BookingStatus, InvoiceStatus } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const clients = await prisma.client.createMany({
    data: [
      {
        name: "Olivia Chen",
        org: "Flow & Glow Yoga",
        email: "hello@flowglow.com",
        phone: "0412 555 210",
        address: "12 Seaside Rd, Bondi",
        notes: "Prefers early morning slots.",
      },
      {
        name: "Nina Patel",
        org: "Restore Therapy",
        email: "nina@restore.com",
        phone: "0408 221 902",
        address: "88 Calm St, Newtown",
        notes: "Send invoices fortnightly.",
      },
    ],
  });

  const serviceData = await prisma.service.createMany({
    data: [
      {
        label: "Vinyasa Flow",
        defaultDuration: 60,
        defaultPrice: 90,
        active: true,
      },
      {
        label: "Remedial Massage",
        defaultDuration: 75,
        defaultPrice: 120,
        active: true,
      },
    ],
  });

  const [olivia, nina] = await prisma.client.findMany();
  const [vinyasa, remedial] = await prisma.service.findMany();

  const bookingOne = await prisma.booking.create({
    data: {
      clientId: olivia.id,
      serviceId: vinyasa.id,
      date: new Date("2024-02-02"),
      startTime: "09:30",
      duration: 60,
      price: 90,
      notes: "Studio session",
      status: BookingStatus.CONFIRMED,
    },
  });

  const bookingTwo = await prisma.booking.create({
    data: {
      clientId: nina.id,
      serviceId: remedial.id,
      date: new Date("2024-02-07"),
      startTime: "13:00",
      duration: 75,
      price: 120,
      notes: "Home visit",
      status: BookingStatus.CONFIRMED,
    },
  });

  const invoice = await prisma.invoice.create({
    data: {
      clientId: olivia.id,
      invoiceNumber: "INV-001",
      periodStart: new Date("2024-02-01"),
      periodEnd: new Date("2024-02-15"),
      status: InvoiceStatus.DRAFT,
      lines: {
        create: [
          {
            bookingId: bookingOne.id,
            label: "Vinyasa Flow",
            date: new Date("2024-02-02"),
            time: "09:30",
            duration: 60,
            notes: "Studio session",
            amount: 90,
          },
        ],
      },
    },
  });

  await prisma.invoiceLine.create({
    data: {
      invoiceId: invoice.id,
      bookingId: bookingTwo.id,
      label: "Remedial Massage",
      date: new Date("2024-02-07"),
      time: "13:00",
      duration: 75,
      notes: "Home visit",
      amount: 120,
    },
  });

  console.log({ clients, serviceData });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
