import { Request, Response } from 'express';

export class EquipmentController {
  // GET /api/v1/equipments?environmentId=123
  public static getAll = (req: Request, res: Response): void => {
    const { environmentId } = req.query;
    // TODO: Filtrar por ambiente si environmentId está presente, o devolver todos
    res.status(501).json({
      success: false,
      message: ' La consulta de equipos todavía no está implementada.'
    });
  };

  // POST /api/v1/equipments
  public static create = (req: Request, res: Response): void => {
    // TODO: Registrar un nuevo equipo vinculado a un ambiente en req.body
    res.status(501).json({
      success: false,
      message: 'El registro de equipo todavía no está implementado.'
    });
  };

  // PATCH /api/v1/equipments/:id
  public static updateStatus = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: Actualizar parcialmente estado técnico o ubicación vía req.body
    res.status(501).json({
      success: false,
      message: `La actualización del estado técnico del equipo ${id} todavía no está implementada.`
    });
  };
}