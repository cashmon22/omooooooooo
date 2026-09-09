import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleProgramStatus } from "./routes/program";
import { createPaymentRequest, listPaymentRequests, updatePaymentRequestStatus } from "./routes/payment-requests";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/program/status", handleProgramStatus);
  app.post("/api/payment-requests", createPaymentRequest);
  app.get("/api/payment-requests", listPaymentRequests);
  app.patch("/api/admin/payment-requests/:id/status", updatePaymentRequestStatus);

  return app;
}
