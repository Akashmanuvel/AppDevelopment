package com.onlinelending.Service;
import java.util.List;

import com.onlinelending.Entity.BorrowerVerifyEntity;


public interface BorrowerVerifyInt {
 public List<BorrowerVerifyEntity> getBorrower();
 public BorrowerVerifyEntity postBorrower(BorrowerVerifyEntity bve);
 public BorrowerVerifyEntity putBorrower(BorrowerVerifyEntity bve);
}
