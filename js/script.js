document.addEventListener('DOMContentLoaded', () => {
    
    function updateEnvironmentStatus(id, status) {
        const environment = document.getElementById(id);
        const statusElement = environment.querySelector('.status');
        
        statusElement.dataset.status = status;
        statusElement.textContent = getStatusText(status);
    }
    
    
    function getStatusText(status) {
        switch (status) {
            case 'free': return 'Livre';
            case 'occupied': return 'Ocupado';
            case 'maintenance': return 'Manutenção';
            default: return 'Desconhecido';
        }
    }
    
   
    function toggleStatus(event) {
        const statusElement = event.currentTarget.querySelector('.status');
        const currentStatus = statusElement.dataset.status;
        
        let newStatus;
        switch (currentStatus) {
            case 'free': newStatus = 'occupied'; break;
            case 'occupied': newStatus = 'maintenance'; break;
            case 'maintenance': newStatus = 'free'; break;
            default: newStatus = 'free';
        }
        
        updateEnvironmentStatus(event.currentTarget.id, newStatus);
    }
    
    
    document.querySelectorAll('.environment').forEach(env => {
        env.addEventListener('click', toggleStatus);
    });
    
    
    updateEnvironmentStatus('room1', 'free');
    updateEnvironmentStatus('lab1', 'occupied');
    updateEnvironmentStatus('room2', 'maintenance');
    updateEnvironmentStatus('room3', 'free');
    updateEnvironmentStatus('netLab', 'free');
});