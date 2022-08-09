package com.example.emp_manage_backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.emp_manage_backend.model.Employee;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Long>{

}