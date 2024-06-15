import { Injectable, Scope } from '@nestjs/common';
import { Partner } from '@prisma/client';

@Injectable({
  scope: Scope.REQUEST, //garante que não aconteça substrição de id quando o programa estiver sendo usado simultanemante por dois usuários
})
export class TenantService {
  private tenant: Partner;

  setTenant(tenant: Partner) {
    this.tenant = tenant;
  }

  getTenant() {
    return this.tenant;
  }
}
