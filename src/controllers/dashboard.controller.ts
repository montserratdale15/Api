import { Request, Response } from 'express';

export class DashboardController {
  // GET /api/v1/dashboard/summary
  public static getSummary = (req: Request, res: Response): void => {
    // TODO: Retornar contadores de usuarios, ambientes, equipos operativos y novedades
    res.status(501).json({
      success: false,
      message: ' El resumen del dashboard todavía no está implementado.'
    });
  };
}