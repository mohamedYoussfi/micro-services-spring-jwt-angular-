package net.youssfi.customerservice.repo;

import net.youssfi.customerservice.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer,String> {
}
