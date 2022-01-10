import request from "supertest";

import { app } from "@shared/infra/http/app";

describe("Create Category Controller", () => {
  it("test", () => {
    request(app).get("/cars/available").expect(201);
  });
});
