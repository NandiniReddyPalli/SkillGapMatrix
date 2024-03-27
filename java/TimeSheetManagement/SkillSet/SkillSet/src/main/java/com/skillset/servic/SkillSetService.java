package com.skillset.servic;

import java.util.List;

import com.skillset.dto.GapDto;
import com.skillset.dto.SkillGapDto;
import com.skillset.exception.RecordNotFoundException;

public interface SkillSetService 
{
	List<GapDto> fetchSkillDto(String email,Integer skillCategoryId) throws RecordNotFoundException;
	public List<SkillGapDto> findEmployeeSkills(String email) throws RecordNotFoundException;
}